const app = require("./config/express")();

require("dotenv").config();
require("./config/database");

const cors = require("cors");

app.use(cors());

app.listen(app.get("port"), () => {
  console.log(`Servidor rodando na porta ${app.get("port")}...`);
});
