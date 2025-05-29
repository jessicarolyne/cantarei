const Services = require('./Services.js');
const { Celebracao, Salmo } = require('../database/models/index.js');

class CelebracaoSalmoServices extends Services {
    constructor() {
        super('CelebracaoSalmo');
    }

    async vincularCelebracaoSalmo(celebracao_id, salmo_id) {
        const celebracao = await Celebracao.findByPk(celebracao_id);
        const salmo = await Salmo.findByPk(salmo_id);

        if (!celebracao || !salmo) {
            throw new Error('Celebração ou salmo não encontrado.');
        }

        await celebracao.addSalmo(salmo);
        return { message: 'Salmo vinculado com sucesso.' };
    }

    async desvincularCelebracaoSalmo(pessoa_id, grupo_id) {
        const celebracao = await Celebracao.findByPk(celebracao_id);
        const salmo = await Salmo.findByPk(salmo_id);

        if (!celebracao || !salmo) {
            throw new Error('Celebração ou salmo não encontrado.');
        }

        await celebracao.removeSalmo(salmo);
        return { message: 'Salmo desvinculado com sucesso.' };
    }

    async listarCelebracaoSalmo(salmo_id) {
        const salmo = await Salmo.findByPk(salmo_id, {
            include: {
                model: Celebracao,
                as: 'celebracoes',
                through: { attributes: [] }
            }
        });

        if (!salmo) {
            throw new Error('Salmo não encontrado.');
        }

        return salmo.celebracoes;
    }

    async listarSalmoCelebracao(celebracao_id) {
        const celebracao = await Celebracao.findByPk(celebracao_id, {
            include: {
                model: Salmo,
                as: 'salmos',
                through: { attributes: [] }
            }
        });

        if (!celebracao) {
            throw new Error('Pessoa não encontrada.');
        }

        return celebracao.salmos;
    }
}

module.exports = CelebracaoSalmoServices;