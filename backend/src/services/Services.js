const dataSource = require('../models');

class Services {
    constructor(NomeDoModel) {
        this.model = NomeDoModel;
    }

    async listarRegistros() {
        return dataSource[this.model].findAll();
    }
}

module.exports = Services;