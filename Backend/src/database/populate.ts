import "./index";

import DadosClienteModel from "./schemas/DadosCliente";
import DadosUsinaModel from "./schemas/DadosUsina";

const dadosClientes = require("./dataPlaceholder/dadosClientes.json");
const dadosUsina = require("./dataPlaceholder/dadosUsina.json");

async function PopulateDatabase() {
  console.log("\x1b[36m", "Populating...");

  try {
    console.log("\x1b[37m", "Populating Clients Database");
    await DadosClienteModel.create(dadosClientes);

    console.log("\x1b[37m", "Populating PowerPlant Database");
    await DadosUsinaModel.create(dadosUsina);

    console.log("\x1b[32m", "Populating Complete!");
  } catch (error) {
    console.log("\x1b[31m", error);
  } finally {
    process.exit();
  }
}

PopulateDatabase();
