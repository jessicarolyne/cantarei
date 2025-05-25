class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async listarTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.listarRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            console.error('Erro ao listar registros:', error);
            return res.status(500).json({ erro: 'Erro interno no servidor' });
        }
    }
}
module.exports = Controller;