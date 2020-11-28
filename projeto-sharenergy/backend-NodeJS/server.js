const express = require('express');
const app = express();

const mongoose = require("mongoose");

// Iniciando o DB
mongoose.connect(
    'mongodb+srv://adm:asdf-456@cluster0.ixajh.mongodb.net/sharenergy-project-db?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);


app.listen(3100, () =>{
    console.log("Servidor rodando na porta 3100");
});

app.get('/', (req, res) => {
    res.send("Olá Sharenergy");
});