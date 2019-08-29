const app = angular.module("myApp", []);

const express = require('express');
const app = express();
const cors = require('cors');

//Definindo módulos para chamar o HTML
const http = require("http").createServer(servidor);

app.use('/', view);

http.listen(3000, function(){
    console.log("Servidor Online");
  });
  
module.exports = app;