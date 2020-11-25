import mongoose, { Schema } from "mongoose";

const DadosUsinaSchema = new mongoose.Schema({
  tempo_h: Schema.Types.Number,
  tensao_V: Schema.Types.Number,
  corrente_A: Schema.Types.Number,
  potencia_kW: Schema.Types.Number,
  temperatura_C: Schema.Types.Number,
});

export default mongoose.model("DadosUsina", DadosUsinaSchema);
