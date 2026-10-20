# Nome do Projeto

Descrição curta do projeto.

🔗 **Site publicado:** https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/

## Como rodar
npm install
npm run dev

## Scripts
- `npm run lint`: verifica o código com ESLint
- `npm run test`: roda os testes
- `npm run build`: gera a versão de produção

## Pipeline CI/CD
A cada push ou pull request na `main`, o GitHub Actions executa:
1. Instalação das dependências (`npm ci`)
2. Lint
3. Testes
4. Build

Em push na `main`, o site é publicado automaticamente no GitHub Pages.