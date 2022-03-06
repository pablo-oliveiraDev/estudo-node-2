/**
 * Arquivo: config/database.js
 * Descrição: arquivo responsável pelas 'connectionStrings da aplicação: PostgreSQL.
 * Data: 06/03/2022
 * Author: Pablo de Oliveira
 */

const {Pool}= require('pg');
const dotenv = require('dotenv');
const { text } = require('express');
dotenv.config();
//===> conexao com a Base de Dados (PostgreSQL)
const pool = new Pool({
connectionString:process.env.DATABASE_URL
});
pool.on('connect',()=>{
    console.log('Base de Dados conectado com sucesso!')
});

module.exports={
    query:(text,params)=>pool.query(text,params)
};