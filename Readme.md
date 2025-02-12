# QA Tech Week - Primeira Edição

Este é um repositório de estudos da QA Tech Week, um evento de aprendizado guiado por [Fernando Papito](https://fernandopapito.com.br/)! 🚀

Aqui você encontrará as instruções para configurar o ambiente, subir os serviços necessários, realizar os acessos e rodar os testes automatizados com Playwright.

## 📌 Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados em seu sistema:

- [Git for Windows](https://gitforwindows.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js (versão LTS)](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## 🐋 Guia de Instalação do Docker
- [Windows](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
- [MacOS](https://docs.docker.com/desktop/setup/install/mac-install/)
- [Linux Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
   
## 🐳 Subindo o Ambiente com Docker Compose
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

## 📩Servidor de e-mail para teste
 - mailtrap.io

## Usuário usado para fazer login em paybank-mf-auth:3000/
- CPF: 00000014141
- Senha: 147258

## Configurar o host
- Acessar C:\Windows\System32\drivers\etc\hosts
- Configurar os hosts de acordo com o arquivo utils\hosts desse repositório.

## 🧪 Executando os Testes com Playwright

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

## 📄 Licença
Este projeto está sob a licença MIT.

----

#### [Adaptado de github.com/ComunidadeTechQA/qatw-primeira-edicao, por Fernando Papito](https://github.com/ComunidadeTechQA/qatw-primeira-edicao?tab=readme-ov-file).
