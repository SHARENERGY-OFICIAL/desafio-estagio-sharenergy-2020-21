const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  numeroCliente: {
    type: Number,
    require: true,
  },
  nomeCliente: {
    type: String,
    require: true,
  },
  usinas: [
    {
      numeroUsina: {
        type: Number,
        require: true,
      },
      percentualUsina: {
        type: Number,
        require: true,
      },
    },
  ],
  criadoEm: {
    type: Date,
    default: Date.now,
  },
  contatoCliente: [
    {
      nomeRua: {
        type: String,
        require: false,
      },
      nomeBairro: {
        type: String,
        require: false,
      },
      nomeCidade: {
        type: String,
        require: false,
      },
      nomeEstado: {
        type: String,
        require: false,
      },
      nomePais: {
        type: String,
        require: false,
      },
      numeroCEP: {
        type: String,
        require: false,
      },
      numeroTelefone: {
        type: String,
        require: false,
      },
    },
  ]
});

mongoose.model("Cliente", ClienteSchema);
