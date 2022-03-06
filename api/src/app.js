/**
* Arquivo: api/src/app.js
* Descrição: arquivo responsavel por toda a configuração e execução da aplicação.
* Data: 06/03/2022
* Author: Pablo de Oliveira
*/

const express = require('express');
const cors = require('cors');

const app = express();


//==> rotas da API
const index = require('./routes/index');
const usersRoute=require('./routes/users.routers');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ 'type': 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/',usersRoute);

module.exports = app;
