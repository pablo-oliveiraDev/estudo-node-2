/**
 * Arquivo: src/controlles/users.controllers.js
 * Descrição: arquivo responsável pela lógica do CRUD api users.
 * Data: 06/03/2022
 * Author: Pablo de Oliveira
 */

const db = require('../config/database');
// método responsavel por criar um novo user

exports.createUsers = async (req, res) => {
    const { nome, status, email, senha,id } = req.body;
    const response = await db.query(
        'INSERT INTO users (nome,status,email,senha,id) VALUES ($1, $2, $3, $4,$5)',
        [nome, status, email, senha,id],
        
    );

    res.status(201).send({
        message: 'User added succefully',
        body: {
            user: { nome, status, email, senha,id }
        },
    });
};

//metodo responsavel por selecionar todos os users

exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDERS BY nome ASC');
    res.status(200).send(response.rows);
}; 
//metodo responsavel pela busca de usuario pelo id

exports.findUserById =async (req,res) =>{
    const userId= parseInt(req.params.id);
    const response =await db.query('SELECT * FROM users where id=$5',[id]);

};

//