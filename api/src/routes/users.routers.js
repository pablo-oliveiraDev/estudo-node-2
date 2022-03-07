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



//rota responsavel por selecionar todos users: (get)

router.get('/users', usersControllers.listAllUsers)


//rota responsavel por selecionar o user pelo id:(get)

router.get('/users/:id', usersControllers.findUserById);

//rota responsavel pela atualização de users
router.update('/users/:id', usersControllers.updateUsersById);

//rota responsavel por deletar user;
router.delete('/users/:id', usersControllers.deleteUsersById);

module.exports = router;