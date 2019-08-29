const express = require("express");
const routes = express.Router();
const fs = require("fs");

//evento recebendo o response apontando para a página HTML
routes.get('/', function (req, res){
    res.end(fs.readFileSync("view/gerador.html"));
});

//requisição batendo na rota "/cpf" passa um response apontando para o models/cpf.js
routes.post('/cpf', function (req, res){
    res.json(fs.readFileSync("src/models/Cpf.js"));
});

module.exports = routes;


