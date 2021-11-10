const express = require('express');

//aqui minha constante está guardando todas as funcionalidades de rotas que express possui
const route = express.Router();


//definindo as rotas

//página inicial
route.get('/', (req, res) => {
    res.render('index');
});

//criar sala
route.get('/create-room', (req, res) => {
    res.render('create-room');
});

//sala
route.get('/room', (req, res) => {
    res.render('room');
});

//exportando o arquivo para sert usado em outros arquivos
module.exports = route;