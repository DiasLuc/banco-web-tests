# Banco Web Tests (Mentoria 2.0)

## Objetivo
Este projeto tem como objetivo demonstrar para os alunos da "Mentoria 2.0" como automatizar testes de aplicações web utilizando Cypress, JavaScript e boas práticas de organização de código.

## Componentes do Projeto
- **Cypress**: Framework principal de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar a escrita e manutenção dos testes, localizados em `cypress/support/commands/`.
- **Relatórios**: Geração de relatórios em HTML utilizando o `cypress-mochawesome-reporter`.
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Contém os arquivos de teste (`login.cy.js`, `transferencia.cy.js`).
  - `cypress/support/commands/`: Comandos customizados reutilizáveis.
  - `cypress/fixtures/`: Dados de apoio para os testes.
  - `cypress/reports/`: Relatórios gerados após a execução dos testes.
  - `screenshots/` e `videos/`: Evidências geradas automaticamente pelo Cypress.

## Pré-requisitos
- Node.js instalado
- Clonar e rodar as aplicações:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação
1. Clone este repositório:
   ```bash
   git clone <este-repo>
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes
1. Certifique-se de que a API e o front-end estejam rodando localmente.
2. Execute os testes via Cypress:
   - Modo interativo:
     ```bash
     npx cypress open
     ```
   - Modo headless (com geração de relatório):
     ```bash
     npx cypress run --reporter cypress-mochawesome-reporter --reporter-options reportDir=cypress/reports/html,overwrite=false,html=true,json=false
     ```
3. Acesse o relatório em `cypress/reports/html/index.html`.

## Documentação dos Testes
### login.cy.js
- **Login com dados válidos**: Garante que o usuário consegue acessar o sistema com credenciais corretas.
- **Login com dados inválidos**: Verifica se a mensagem de erro é exibida ao tentar logar com credenciais incorretas.

### transferencia.cy.js
- Testes relacionados à funcionalidade de transferência bancária (ver detalhes no arquivo).

## Comandos Customizados
Os comandos customizados estão em `cypress/support/commands/` e incluem:
- `cy.loginWithValidCredentials()`: Realiza login com dados válidos.
- `cy.loginWithInvalidCredentials()`: Tenta login com dados inválidos.
- `cy.verifyToastMessage(mensagem)`: Verifica se uma mensagem de toast específica é exibida.
- Outros comandos para facilitar ações comuns nos testes.

## Contribuição
Pull requests são bem-vindos! Para sugestões, abra uma issue.

---
Mentoria 2.0 - Automação de Testes com Cypress
