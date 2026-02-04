import axios from 'axios';
import dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();

const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const ZONE_NAME = process.env.CLOUDFLARE_ZONE_NAME || 'ipablo.dev';

const BASE_URL = 'https://api.cloudflare.com/client/v4';
const HEADERS = {
  Authorization: `Bearer ${API_TOKEN}`,
  'Content-Type': 'application/json',
};

interface CacheRule {
  action: string;
  description: string;
  expression: string;
  action_parameters: {
    cache_ttl?: number;
    headers?: Record<string, string>;
  };
}

const validateEnv = (): boolean => {
  if (!API_TOKEN || API_TOKEN === 'seu_api_token_aqui') {
    console.log('❌ CLOUDFLARE_API_TOKEN não configurado!');
    console.log('   Copie .env.example para .env e preencha com seus valores');
    return false;
  }

  if (!ACCOUNT_ID || ACCOUNT_ID === 'seu_account_id_aqui') {
    console.log('❌ CLOUDFLARE_ACCOUNT_ID não configurado!');
    console.log('   Copie .env.example para .env e preencha com seus valores');
    return false;
  }

  return true;
};

const getZoneId = async (): Promise<string | null> => {
  try {
    const url = `${BASE_URL}/zones?name=${ZONE_NAME}`;
    const response = await axios.get(url, { headers: HEADERS });

    if (response.status === 200) {
      const zones = response.data.result;
      if (zones && zones.length > 0) {
        console.log(`✅ Domínio encontrado: ${ZONE_NAME}`);
        return zones[0].id;
      } else {
        console.log(`❌ Domínio '${ZONE_NAME}' não encontrado no Cloudflare`);
        return null;
      }
    }
  } catch (error: any) {
    if (error.response) {
      console.log(`❌ Erro ao buscar zone: ${error.response.data.errors?.[0]?.message || error.message}`);
    } else {
      console.log(`❌ Erro de conexão: ${error.message}`);
    }
    return null;
  }
};

const createCacheRule = async (zoneId: string, rule: CacheRule): Promise<boolean> => {
  try {
    const url = `${BASE_URL}/zones/${zoneId}/cache/cache_rules`;
    const response = await axios.post(url, rule, { headers: HEADERS });

    if (response.status === 200) {
      const ruleId = response.data.result.id;
      console.log(`✅ Rule criada: ${rule.description} (ID: ${ruleId})`);
      return true;
    }
  } catch (error: any) {
    if (error.response) {
      console.log(`❌ Erro ao criar rule '${rule.description}': ${error.response.data.errors?.[0]?.message || error.message}`);
    } else {
      console.log(`❌ Erro de conexão ao criar rule: ${error.message}`);
    }
    return false;
  }
};

const createAllCacheRules = async (zoneId: string): Promise<boolean> => {
  const rules: CacheRule[] = [
    {
      action: 'set_cache_ttl',
      description: 'Cache assets por 1 ano',
      expression: '(http.request.uri.path ~ "^/assets/") AND (ends_with(http.request.uri.path, ".js") OR ends_with(http.request.uri.path, ".css") OR ends_with(http.request.uri.path, ".webp") OR ends_with(http.request.uri.path, ".png") OR ends_with(http.request.uri.path, ".jpg"))',
      action_parameters: {
        cache_ttl: 31536000,
      },
    },
    {
      action: 'set_cache_ttl',
      description: 'Cache HTML por 1 hora',
      expression: '(ends_with(http.request.uri.path, ".html")) OR (http.request.uri.path == "/")',
      action_parameters: {
        cache_ttl: 3600,
      },
    },
    {
      action: 'set_response_header',
      description: 'Cache Control para assets',
      expression: '(http.request.uri.path ~ "^/assets/")',
      action_parameters: {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
    },
    {
      action: 'set_response_header',
      description: 'Cache Control para HTML',
      expression: '(ends_with(http.request.uri.path, ".html")) OR (http.request.uri.path == "/")',
      action_parameters: {
        headers: {
          'Cache-Control': 'public, max-age=3600, must-revalidate',
        },
      },
    },
  ];

  let successCount = 0;
  for (const rule of rules) {
    if (await createCacheRule(zoneId, rule)) {
      successCount++;
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return successCount === rules.length;
};

const main = async (): Promise<void> => {
  console.log('='.repeat(60));
  console.log('🚀 Cloudflare Cache Setup Automático');
  console.log(`⏰ ${new Date().toLocaleString('pt-BR')}`);
  console.log('='.repeat(60));

  if (!validateEnv()) {
    console.log('\n📝 Instruções:');
    console.log('   1. Copie .env.example para .env');
    console.log('   2. Abra .env e preencha com seus valores');
    console.log('   3. Execute: npm run setup-cloudflare');
    return;
  }

  console.log('\n🔍 Validando credenciais...');
  console.log(`   Account ID: ${ACCOUNT_ID?.substring(0, 10)}...`);
  console.log(`   API Token: ${API_TOKEN?.substring(0, 20)}...`);

  console.log('\n🔗 Conectando ao Cloudflare...');
  const zoneId = await getZoneId();

  if (!zoneId) {
    console.log('\n❌ Não foi possível conectar ao Cloudflare!');
    console.log('   Verifique:');
    console.log('   - Se o API Token é válido');
    console.log('   - Se o domínio está adicionado no Cloudflare');
    console.log('   - Se os nameservers foram trocados (propagação DNS)');
    return;
  }

  console.log(`   Zone ID: ${zoneId}`);

  console.log('\n📋 Criando Cache Rules...');
  console.log('-'.repeat(60));

  if (await createAllCacheRules(zoneId)) {
    console.log('-'.repeat(60));
    console.log('\n✅ Setup concluído com sucesso!');
    console.log('\n🎉 Próximos passos:');
    console.log('   1. Acesse https://ipablo.dev');
    console.log('   2. Abra DevTools (F12) → Network');
    console.log('   3. Recarregue a página');
    console.log('   4. Verifique se cf-cache-status = HIT');
    console.log('   5. Execute Google PageSpeed Insights');
  } else {
    console.log('-'.repeat(60));
    console.log('\n⚠️  Algumas rules não foram criadas.');
    console.log('   Tente novamente mais tarde.');
  }

  console.log('='.repeat(60));
};

main().catch((error) => {
  console.error('❌ Erro fatal:', error.message);
  process.exit(1);
});
