# Patinhas Felizes - Clínica Veterinária

Projeto de um site para uma clínica veterinária, apenas para testes e estudo subre pipeline e CI/CD

🔗 **Site publicado:** https://dudahudziak.github.io/projeto/

## Como rodar
```bash
npm install
npm run dev
```

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