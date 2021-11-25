const {Rollo, Marca} = require('./../database/models/index');

const RolloService = {
    getAll: async () => {
        const rollos = await Rollo.findAll();
        return rollos;
    }
}

module.exports = RolloService;