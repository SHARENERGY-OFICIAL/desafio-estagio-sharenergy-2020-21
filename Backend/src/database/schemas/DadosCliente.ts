import mongoose, { Schema } from "mongoose";

const DadosClienteSchema = new mongoose.Schema({
  numeroCliente: Schema.Types.Number,
  nomeCliente: Schema.Types.String,
  usinas: [
    {
      numeroUsina: Schema.Types.Number,
      percentualUsina: Schema.Types.Number,
    },
  ],
});

export default mongoose.model("DadosCliente", DadosClienteSchema);
