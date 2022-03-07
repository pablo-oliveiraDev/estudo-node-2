/**
 * Arquivo: src/controlles/users.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD api users.
 * Data: 06/03/2022
 * Author: Pablo de Oliveira
 */

const db = require('../config/database');
// método responsavel por criar um novo user

exports.createUsers = async (req, res) => {
    const { nome, id, status, email, senha } = req.body;
    const response = await db.query(
        'INSERT INTO users (nome,status,email,senha) VALUES ($1, $2, $3, $4)',
        [nome, status, email, senha],
        
    );

    res.status(201).send({
        message: 'User added succefully',
        body: {
            user: { nome, status, email, senha }
        },
    });
};

//metodo responsavel por selecionar todos os users

exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDERS BY nome ASC');
    res.status(200).send(response.rows);
};