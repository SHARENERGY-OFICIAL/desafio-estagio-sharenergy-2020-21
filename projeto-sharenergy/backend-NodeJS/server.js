const express = require("express");

const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

// Iniciando o DB
mongoose.connect(
  "mongodb+srv://adm:asdf-456@cluster0.ixajh.mongodb.net/sharenergy-project-db?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

const Cliente = mongoose.model("Cliente");

app.get("/", (req, res) => {
  Cliente.create({
    numeroCliente: 1,
    nomeCliente: "Ana Silva",
    usinas: [
      {
        numeroUsina: 1,
        percentualUsina: 30,
      },
    ],
  });

  return res.send("Olá Sharenergy");
});

app.listen(3100, () => {
  console.log("Servidor rodando na porta 3100");
});
