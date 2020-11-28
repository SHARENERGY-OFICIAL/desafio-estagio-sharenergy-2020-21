const express = require('express');
const app = express();

app.listen(3100, () =>{
    console.log("Servidor rodando na porta 3100");
});

app.get('/', (req, res) => {
    res.send("Olá Sharenergy");
});