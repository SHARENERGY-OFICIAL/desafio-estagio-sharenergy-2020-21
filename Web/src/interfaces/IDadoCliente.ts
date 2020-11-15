export interface Usina {
  numeroUsina: number;
  percentualUsina: number;
}

export default interface IDadoCliente {
  numeroCliente: number;
  nomeCliente: string;
  usinas: Usina[];
}
