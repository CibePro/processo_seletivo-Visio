# Instruções para a etapa de análise de código do processo seletivo para Backend Web

Nesta etapa do processo seletivo, você receberá um código pronto de uma aplicação web backend e sua tarefa será analisá-lo e propor melhorias. O objetivo é avaliar suas habilidades de análise de código, identificação de problemas e proposição de soluções.

O contexto do código está disponível no Notion da atividade.

## Instruções para inicializar a aplicação

1. Antes de iniciar a aplicação, inicie uma instância do MongoDB em Docker utilizando o seguinte comando:

  ```bash
  docker run --name mongodb -p 27017:27017 -d mongo:latest
  ```

  Isso irá baixar a imagem do MongoDB mais recente e iniciá-lo em um container. Certifique-se de ter o Docker instalado em seu computador antes de executar este comando.

2. Abra o arquivo .zip da atividade no seu computador e crie um repositório no seu GitHub pessoal com esses arquivos.

3. Na pasta do projeto, execute o comando `npm install` para instalar as dependências.

4. Execute o comando `npm run dev` para iniciar a aplicação.

5. Utilize uma ferramenta como o Postman ou o Insomnia para testar as rotas da API e identificar possíveis problemas, falhas de segurança, ineficiências ou oportunidades de melhorias.

## Instruções para a análise e propostas de melhorias

1. Analise o código da aplicação e identifique possíveis problemas de estruturação, de performance, de escalabilidade, de organização de arquivos e pastas, de tratamento de erros, de segurança ou outras questões relevantes.

2. Crie um arquivo chamado melhorias.md no seu repositório no GitHub e descreva as melhorias que você propõe, explicando por que elas são necessárias e como você as implementaria.

3. Faça um commit das suas alterações e envie o código para o seu repositório no GitHub.

4. Envie o link do seu repositório com as melhorias propostas de acordo com o que está descrito no Notion.

## O que será avaliado

- Sua capacidade de análise de código e identificação de problemas e oportunidades de melhorias.

- Sua habilidade de propor soluções e explicar o raciocínio por trás delas.

- Sua capacidade de organizar e documentar suas ideias de forma clara e concisa.

- Sua habilidade de trabalhar com Git e GitHub.

Boa sorte!
