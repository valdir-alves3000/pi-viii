# Protection Of Good

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

Este Projeto busca contribuir com o controle de casos de pessoas infectadas por doen??as contagiosas.

Por meio de registro de localiza????es dos usu??rios. No intuito de notificalos em casos de contato com pessoas contaminadas.

## Installation

```bash
# Clone este reposit??rio
$ git clone https://github.com/valdir-alves3000/pi-viii/.git

# Acesse a pasta do projeto no terminal/cmd
$ cd /pi-viii/backend

# Instale as depend??ncias
$ npm install

```

## Running the app

```bash
# development
$ npm run start

# O servidor inciar?? na porta:3333 - acesse <http://localhost:3333>

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Vari??veis de Ambiente

Para rodar esse projeto, voc?? vai precisar adicionar as seguintes vari??veis de ambiente no seu .env

`DATABASE_URL`

`TWILIO_ID`

`TWILIO_AUTHTOKEN`

`JWT_SECRET`

## Tecnologias

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [Class Transformer](https://github.com/typestack/class-transformer#readme)
- [JsonWebToken](https://jwt.io/introduction)
- [Node Js](https://nodejs.org/en/)
- [Nest Js](https://docs.nestjs.com/)
- [Reflect-Metadata](https://www.npmjs.com/package/reflect-metadata)
- [Prisma](https://www.prisma.io/)
- [Class Validator](https://www.npmjs.com/package/class-validator)
- [Twilio](https://www.twilio.com/pt-br/docs/whatsapp)

## Endpoints

**_GET_** /users

Retorna uma lista com todos usu??rios cadastrados.

##### Exemplo

---

    http://localhost:3333/

---

**_POST_** /users

Cria um novo usu??rio no banco de dados. Todos os campos s??o obrigat??rios

##### Exemplo

---

    body {
        email: 'author@email.com',
        name: 'Nome do usu??rio',
        password: 'Senha do usu??rio',
        phone: 'Telefone do usu??rio',
        cpf: 'CPF do usu??rio'
    }

---

**_POST_** /places

Cria um novo local no banco de dados. Todos os campos s??o obrigat??rios

##### Exemplo

---

    body {
        name: 'Nome do Local',
        address: 'Endere??o do Local',
        city: 'Cidade',
        state: 'Estado'
    }

---

**_POST_** /locations/place_id/:place_id

Registra a localiza????o do usu??rio

##### Exemplo

---

    body {
        place_id: 'ID do local'
    }

---

**_POST_** /message

Envia uma notifica????o para o usu??rio

##### Exemplo

---

    body {
        phone: 'Telefone do usu??rio',
        user_name: 'Nome do usu??rio,
        name: 'Nome do Local',
        address: 'Endere??o do Local',
        city: 'Cidade',
        state: 'Estado',
        date: 'Data da Localiza????o'
    }

---

## License

Nest is [MIT licensed](LICENSE)
