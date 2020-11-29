const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
/**
 * Conexao com o BD
 */
mongoose.connect(
  "mongodb+srv://adm:asdf-456@cluster0.ixajh.mongodb.net/sharenergy-project-db?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Conectado ao banco de dados!");
});

mongoose.connection.on("error", (err) => {
  console.log("Erro na conexão: " + err);
});

mongoose.connection.on("disconnect", () => {
  console.log("Desconectado :(");
});
