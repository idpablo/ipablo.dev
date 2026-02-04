# Portfólio - Pablo Desenvolvedor

Portfólio responsivo e otimizado desenvolvido com React 18, TypeScript e Vite. Site conta com múltiplas camadas de cache, internacionalização (PT-BR/EN-US/ZH-CH) e design responsivo com tema claro/escuro.

## 🚀 Visite [ipablo.dev](https://ipablo.dev)

Site disponibilizado com **GitHub Pages** + **Cloudflare**. Build e deploy são automatizados via GitHub Actions a cada push na branch `main`.

**Cache Strategy:**
- Cloudflare: 1 ano para assets, 1 hora para HTML
- Service Worker: Cache local no navegador
- localStorage: Cache de dados da aplicação (365 dias)

---

## 🛠️ Tecnologias Utilizadas

- **Framework**: React 18 + TypeScript
- **Build**: Vite 6.4.1
- **State Management**: Redux Toolkit
- **Styling**: Styled Components
- **Internacionalização**: i18n (PT-BR, EN-US)
- **PWA**: Service Worker + Web App Manifest
- **Deploy**: GitHub Pages + Cloudflare CDN
- **Code Quality**: SonarCloud

---

## 📊 Qualidade de Código

[![Linhas duplicadas (%)](https://sonarcloud.io/api/project_badges/measure?project=idpablo_ipablo.dev&metric=duplicated_lines_density&token=d4215bf2fb0f7ecd767bcb859bcd6df371e6832e)](https://sonarcloud.io/summary/new_code?id=idpablo_ipablo.dev)
[![Linhas de codigo (%)](https://sonarcloud.io/api/project_badges/measure?project=idpablo_ipablo.dev&metric=ncloc&token=d4215bf2fb0f7ecd767bcb859bcd6df371e6832e)](https://sonarcloud.io/summary/new_code?id=idpablo_ipablo.dev)
[![Code Smell (%)](https://sonarcloud.io/api/project_badges/measure?project=idpablo_ipablo.dev&metric=code_smells&token=d4215bf2fb0f7ecd767bcb859bcd6df371e6832e)](https://sonarcloud.io/summary/new_code?id=idpablo_ipablo.dev)

---

## 📦 Instalação

### Dependências Globais
- Node.js 18+
- npm ou yarn

### Setup Local

```bash
# Instalar dependências
npm install

```

---

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento - executa Vite com hot reload
npm run dev

# Build para produção
npm run build

# Preview do build
npm preview

# Auditoria de segurança
npm audit
```

---

## 📂 Estrutura do Projeto

```
src/
├── index.tsx                 # Entrada da app + Service Worker
├── core/
│   ├── Router.tsx           # React Router com páginas
│   ├── i18n/                # Internacionalização (PT-BR/EN-US)
│   ├── store/               # Redux (tema, estado global)
│   └── theme/               # Tema claro/escuro com Styled Components
├── pages/                   # Páginas (Home, About, Contact, NotFound)
├── ui/                      # Componentes reutilizáveis
├── hooks/                   # Custom hooks
├── utils/                   # Utilitários (cache, etc)
└── data/                    # Dados estáticos
```

---

## 🔄 Sistema de Cache

### Cloudflare (HTTP Headers)
Configurado via `npm run setup-cloudflare` após DNS propagar:
- **Assets** (`/assets/*.js|css|webp`): 1 ano
- **HTML** (`/index.html`, `/`): 1 hora
- **Manifest**: 7 dias
- **Service Worker**: 1 dia

### Service Worker (`public/sw.js`)
Implementa cache do lado do navegador:
- Assets com hash: Cache permanente
- HTML: Revalidação obrigatória
- Offline fallback automático

### localStorage (`src/utils/cache.ts`)
Cache de dados da aplicação:
- Dados estáticos: 365 dias
- Dados dinâmicos (API): 24 horas

---


## 📝 Sobre

Página desenvolvida como portfólio pessoal baseada em boas práticas de:
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Cloudflare Pages & Cache](https://developers.cloudflare.com)

---

## 📄 Licença

Projeto pessoal - uso livre
