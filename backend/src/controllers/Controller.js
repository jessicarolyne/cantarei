class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    }

    async listarTodos(req, res) {
        try {
            const listaDeRegistros = await this.entidadeService.listarRegistros();
            return res.status(200).json(listaDeRegistros);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async buscarPorId(req, res) {
        const { id } = req.params;
        try {
            const umRegistro = await this.entidadeService.buscarRegistroPorId(Number(id));
            return res.status(200).json(umRegistro);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async criarNovoRegistro(req, res) {
        const dados = req.body;
        try {
            const novoRegistro = await this.entidadeService.criarRegistro(dados);
            return res.status(200).json(novoRegistro);
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async atualizarRegistro(req, res) {
        const { id } = req.params;
        const dados = req.body;
        try {
            const dadosAtualizados = await this.entidadeService.atualizarRegistro(dados, Number(id));
            if (!dadosAtualizados) {
                return res.status(400).json({ message: 'O registro não foi atualizado' });
            } else {
                return res.status(200).json({ message: 'Registro atualizado com sucesso' });
            }
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }

    async excluirRegistro(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluirRegistro(Number(id));
            return res.status(200).json({ mensagem: `Id ${id} excluido com sucesso` })
        } catch (error) {
            return res.status(500).json({ erro: `Erro interno no servidor: ${error.message}` });
        }
    }
}
module.exports = Controller;