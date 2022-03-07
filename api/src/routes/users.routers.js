// @ts-nocheck
/**
 * Arquivo: src/routes/product.routes.js
 * Descrição: arquivo responsável pelas rotas da api relacionado a classe 'Product'.
 * Data: 06/03/2022
 * Author: Pablo de Oliveira
 */

const router = require('express-promise-router')();
const usersControllers = require('../controlles/users.controllers.js');
// =>definindo as rotas do crud -Users

//rota responsável por criar novo usuário (user)

router.post('/users', usersControllers.createUsers);

module.exports = router;

//rota responsavel por selecionar todos users: (get)

router.get('/users', usersControllers.listAllUsers)
module.exports = router;