/**
* Arquivo:src/routes/index.js
* Descrição: arquivo responsavel pela chamada da(s) API's da aplicação.
* Data: 06/03/2022
* Author: Pablo de Oliveira
*/

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja bem-vindo(a) a API Node.js + PostgreSQL + Azure!',
        Version: '1.0.0'
    })

});

module.exports = router;