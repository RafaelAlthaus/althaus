

<p align="center">
  <img src="https://raw.githubusercontent.com/RafaelAlthaus/althaus/master/public/images/header.png" width="600">
  <p align="center">https://althaus.codes</p>
  <br />
</p>

## 💻 Rafael Althaus em ReactJS [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Site para divulgação própria e de código aberto. O objetivo desse projeto é servir de exemplo para estudantes começando no mundo do ReactJS, possuindo diversos casos de uso e conceitos básicos do framework.

## ⚠️ Observações

Todos os dados da aplicação estão armazenados em um arquivo JSON na pasta pública. Para versão de produção, os dados estão sendo consumidos de um JSON armazenado na AWS S3 para facilitar a troca de conteúdo dinâmico. Certifique-se de mudar o caminho no arquivo no `App.js` e, caso também utilize o S3, configure o CORS para aceitar sua requisição.

## 🚢 Deploy

A aplicação vem pré-configurada para dar deploy em um bucket na S3 utilizando o comando `npm run-script deploy`. Para configurar o deploy em seu bucket próprio e levar o projeto para produção, siga o tutorial [nesse artigo.](https://medium.com/serverlessguru/deploy-reactjs-app-with-s3-static-hosting-f640cb49d7e6) Para uma melhor experiência, configure um domínio próprio e utilize SSL (AWS CloudFront).

## 🔀 Dependências utilizadas

Não deixe de conhecer as dependências utilizadas e ler as documentações.
<br /><br />
:rocket: [create-react-app](https://github.com/facebook/create-react-app) <br />
:rocket: [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) <br />
:rocket: [ant-design](https://github.com/ant-design/ant-design)<br />
:rocket: [axios](https://github.com/axios/axios)<br />
:rocket: [react-lottie](https://github.com/chenqingspring/react-lottie)<br />
:rocket: [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel)<br />
:rocket: [react-sky](https://github.com/lucagez/sky)

## 🚧 Me ajude a melhorar!

O projeto estará em eterna construção. Faça um pull request! Esse projeto pode servir de aprendizado para outras pessoas. Sua contribuição pode melhorar o conhecimento de alguém.

## ❓ Dúvidas?

Abra um Issue aqui mesmo e responderei assim que possível.
