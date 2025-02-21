# QA Tech Week - Primeira Edição

Este é um repositório de estudos da [QA Tech Week](https://www.youtube.com/watch?v=louKpr1KzEU&list=PLn2i8I7W73iq2QYJCet6ysRl3SkqLfXZd&index=2), um evento de aprendizado guiado por [Fernando Papito](https://fernandopapito.com.br/).

Nesse evento, serão abordados conceitos e tecnologias para **testar um sistema de autenticação em uma arquitetura de microsserviços**, com a execução de testes manuais, automação de testes de regressão e integração. 

## 💻 Tecnologias utilizadas: 
- Javascript
- Playwright
- Node.js
- Docker
- Redis
- PostgreSQL
- Jenkins

### ✅ Pré-requisitos
- Git for Windows
- Visual Studio Code
- Node.js
- Docker Desktop

### 🐋 Subindo o Ambiente com Docker Compose
O projeto utiliza Docker Compose para gerenciar os serviços necessários para os testes.

1. Certifique-se de que o Docker Desktop está em execução.
2. No terminal, execute o comando abaixo para subir os serviços:
   ```sh
   docker-compose up -d
   ```
3. Para verificar se os contêineres estão rodando:
   ```sh
   docker ps
   ```
4. Para parar os serviços:
   ```sh
   docker-compose down
   ```

### 📩 Servidor de e-mail para teste
 - mailtrap.io

### 🧑‍💻 Usuário usado para fazer login em mf-auth
- CPF: 00000014141
- Senha: 147258

### 🌐 Configurar o host
- Acessar C:\Windows\System32\drivers\etc\hosts
- Configurar os hosts de acordo com o arquivo utils\hosts desse repositório.

### 🎭 Executando os Testes com Playwright

1. Instale as dependências do Playwright:
   ```sh
   npx playwright install
   ```
2. Para rodar os testes localmente:
   ```sh
   npx playwright test
   ```
3. Para visualizar o relatório dos testes após a execução:
   ```sh
   npx playwright show-report
   ```
4. Para rodar os testes em modo UI (visualizando a execução):
   ```sh
   npx playwright test --ui
   ```

----

#### [Adaptado de github.com/ComunidadeTechQA/qatw-primeira-edicao, por Fernando Papito](https://github.com/ComunidadeTechQA/qatw-primeira-edicao?tab=readme-ov-file).
