const express = require("express");

const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());

// Iniciando o DB
mongoose.connect(
  "mongodb+srv://adm:asdf-456@cluster0.ixajh.mongodb.net/sharenergy-project-db?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

requireDir("./src/models");

/**
 * Rotas
 */
app.use("/app", require("./src/routes"));

app.listen(3100, () => {
  console.log("Servidor rodando na porta 3100");
});
