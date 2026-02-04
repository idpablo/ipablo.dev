import os
import requests
import json
import time
from datetime import datetime
from dotenv import load_dotenv

load_dotenv()

API_TOKEN = os.getenv("CLOUDFLARE_API_TOKEN")
ACCOUNT_ID = os.getenv("CLOUDFLARE_ACCOUNT_ID")
ZONE_NAME = os.getenv("CLOUDFLARE_ZONE_NAME", "ipablo.dev")

BASE_URL = "https://api.cloudflare.com/client/v4"
HEADERS = {
    "Authorization": f"Bearer {API_TOKEN}",
    "Content-Type": "application/json"
}

def validate_env():
    """Valida se as variáveis de ambiente foram configuradas"""
    if not API_TOKEN or API_TOKEN == "seu_api_token_aqui":
        print("❌ CLOUDFLARE_API_TOKEN não configurado!")
        print("   Copie .env.example para .env e preencha com seus valores")
        return False
    
    if not ACCOUNT_ID or ACCOUNT_ID == "seu_account_id_aqui":
        print("❌ CLOUDFLARE_ACCOUNT_ID não configurado!")
        print("   Copie .env.example para .env e preencha com seus valores")
        return False
    
    return True

def get_zone_id():
    """Obtém o Zone ID do domínio"""
    url = f"{BASE_URL}/zones?name={ZONE_NAME}"
    try:
        response = requests.get(url, headers=HEADERS)
        if response.status_code == 200:
            zones = response.json()["result"]
            if zones:
                print(f"✅ Domínio encontrado: {ZONE_NAME}")
                return zones[0]["id"]
            else:
                print(f"❌ Domínio '{ZONE_NAME}' não encontrado no Cloudflare")
                return None
        else:
            print(f"❌ Erro ao buscar zone: {response.json()}")
            return None
    except Exception as e:
        print(f"❌ Erro de conexão: {e}")
        return None

def create_cache_rule(zone_id, rule):
    """Cria uma cache rule individual"""
    url = f"{BASE_URL}/zones/{zone_id}/cache/cache_rules"
    try:
        response = requests.post(url, headers=HEADERS, json=rule)
        if response.status_code == 200:
            rule_id = response.json()["result"]["id"]
            print(f"✅ Rule criada: {rule['description']} (ID: {rule_id})")
            return True
        else:
            error = response.json()
            print(f"❌ Erro ao criar rule '{rule['description']}': {error}")
            return False
    except Exception as e:
        print(f"❌ Erro de conexão ao criar rule: {e}")
        return False

def create_all_cache_rules(zone_id):
    """Cria todas as 4 cache rules"""
    rules = [
        {
            "action": "set_cache_ttl",
            "description": "Cache assets por 1 ano",
            "expression": "(http.request.uri.path ~ \"^/assets/\") AND (ends_with(http.request.uri.path, \".js\") OR ends_with(http.request.uri.path, \".css\") OR ends_with(http.request.uri.path, \".webp\") OR ends_with(http.request.uri.path, \".png\") OR ends_with(http.request.uri.path, \".jpg\"))",
            "action_parameters": {
                "cache_ttl": 31536000
            }
        },
        {
            "action": "set_cache_ttl",
            "description": "Cache HTML por 1 hora",
            "expression": "(ends_with(http.request.uri.path, \".html\")) OR (http.request.uri.path == \"/\")",
            "action_parameters": {
                "cache_ttl": 3600
            }
        },
        {
            "action": "set_response_header",
            "description": "Cache Control para assets",
            "expression": "(http.request.uri.path ~ \"^/assets/\")",
            "action_parameters": {
                "headers": {
                    "Cache-Control": "public, max-age=31536000, immutable"
                }
            }
        },
        {
            "action": "set_response_header",
            "description": "Cache Control para HTML",
            "expression": "(ends_with(http.request.uri.path, \".html\")) OR (http.request.uri.path == \"/\")",
            "action_parameters": {
                "headers": {
                    "Cache-Control": "public, max-age=3600, must-revalidate"
                }
            }
        }
    ]
    
    success_count = 0
    for rule in rules:
        if create_cache_rule(zone_id, rule):
            success_count += 1
        time.sleep(1)
    
    return success_count == len(rules)

def main():
    print("=" * 60)
    print("🚀 Cloudflare Cache Setup Automático")
    print(f"⏰ {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print("=" * 60)
    
    if not validate_env():
        print("\n📝 Instruções:")
        print("   1. Copie .env.example para .env")
        print("   2. Abra .env e preencha com seus valores")
        print("   3. Execute este script novamente")
        return
    
    print("\n🔍 Validando credenciais...")
    print(f"   Account ID: {ACCOUNT_ID[:10]}...")
    print(f"   API Token: {API_TOKEN[:20]}...")
    
    print("\n🔗 Conectando ao Cloudflare...")
    zone_id = get_zone_id()
    
    if not zone_id:
        print("\n❌ Não foi possível conectar ao Cloudflare!")
        print("   Verifique:")
        print("   - Se o API Token é válido")
        print("   - Se o domínio está adicionado no Cloudflare")
        print("   - Se os nameservers foram trocados (propagação DNS)")
        return
    
    print(f"   Zone ID: {zone_id}")
    
    print("\n📋 Criando Cache Rules...")
    print("-" * 60)
    
    if create_all_cache_rules(zone_id):
        print("-" * 60)
        print("\n✅ Setup concluído com sucesso!")
        print("\n🎉 Próximos passos:")
        print("   1. Acesse https://ipablo.dev")
        print("   2. Abra DevTools (F12) → Network")
        print("   3. Recarregue a página")
        print("   4. Verifique se cf-cache-status = HIT")
        print("   5. Execute Google PageSpeed Insights")
    else:
        print("-" * 60)
        print("\n⚠️  Algumas rules não foram criadas.")
        print("   Tente novamente mais tarde.")
    
    print("=" * 60)

if __name__ == "__main__":
    main()
