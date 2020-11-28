const mongoose = require("mongoose");

const Cliente = mongoose.model("Cliente");

module.exports = {
  /**
   * Listar 10 Clientes por pagina, buscando no BD. Buscar por Pagina de Clientes
   * @param {*} req
   * @param {*} res
   */
  async listarTodosClientes(req, res) {
    const { page = 1 } = req.query;
    const clientes = await Cliente.paginate({}, { page: page, limit: 10 });

    return res.json(clientes);
  },
  /**
   * Buscar Cliente no BD
   * @param {*} req
   * @param {*} res
   */
  async buscarCliente(req, res) {
    const cliente = await Cliente.findById(req.params.id);

    return res.json(cliente);
  },
  /**
   * Criar novo Cliente no BD
   * @param {*} req
   * @param {*} res
   */
  async criarNovoCliente(req, res) {
    const cliente = await Cliente.create(req.body);

    return res.json(cliente);
  },
  /**
   * Atualizar dados do Cliente no BD
   * @param {*} req
   * @param {*} res
   */
  async atualizarDadosCliente(req, res) {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(cliente);
  },
  /**
   * Excluir Cliente do BD
   * @param {*} req
   * @param {*} res
   */
  async deletarCliente(req, res) {
    await Cliente.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
