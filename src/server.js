//importando o express para uma constante

const express = require('express');
const route = require('./route');
const path = require('path');

//inciando o express
const server = express();

//configurando o servidor para usar o ejs
server.set('view engine', 'ejs');

//apontando o caminho relativo para o diretorio de views
server.set('views', path.join(__dirname, 'views'));

//estou aplicando meus arquivos de rota dentro do server iniciado
server.use(route);

//aplicando a pasta public dentro do server js
server.use(express.static('public'));

server.listen(3000, () => {
    console.log('server is running');
});

