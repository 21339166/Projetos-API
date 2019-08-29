const express = require("express")
const fs = require("fs");
const app = require('express')();
const path = require("path");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o app
app.use(express.static(path.join(__dirname, "view")));

//Iniciando o data base
mongoose.connect(
    "mongodb://localhost:27017/CpfSchema", 
    { useNewUrlParser: true }
);
requireDir("./src/models");

const Cpf = mongoose.model("Cpf");

//rotas
app.use("/", require("./src/routes")) 

app.post("/", (req, res) => {
    res.send("Tudo certo com o método POST")
});

app.post("/cpf", (req, res) => {
    //
    //quando bater na rota /cpf retornar um json no formato "Cpf.js"
    //
});


app.listen(3000)

 