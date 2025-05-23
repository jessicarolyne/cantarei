const database = require('../models');

class GrupoController {
    static async listarGrupos(req, res) {
        try {
            const listaGrupos = await database.Grupo.finfAll();
            return res.status(200).json(listaGrupos);
        } catch (error) {
return 'oi';
        }
    }
}