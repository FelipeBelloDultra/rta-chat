const express = require("express");
const app = express();
const banco = require("./database/database");

app.listen(2512,async function (erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor inciado !!!");
    }
})