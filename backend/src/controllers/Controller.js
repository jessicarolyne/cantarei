class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async listarTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.listaDeRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {

        }
    }
}
module.exports = Controller;