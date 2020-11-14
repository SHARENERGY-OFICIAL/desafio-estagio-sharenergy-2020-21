export default interface IDadoCliente {
  numeroCliente: number;
  nomeCliente: string;
  usinas: [
    {
      numeroUsina: number;
      percentualUsina: number;
    }
  ];
}
