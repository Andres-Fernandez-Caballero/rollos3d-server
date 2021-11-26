const serviceRollo = require('./../src/services/rollos.service');

describe('Servicio ABM Rollos', () => {
    test('listar devuelve un Array', async() => {
        try {
            const rollos = await serviceRollo.getAll();
            expect(Array.isArray(rollos)).toBe(true);
        }catch (e) {
            // handle error
        }

    });
    test('buscar rollo por id = 0', async () => {
        const id = 0;
        const rollo = await serviceRollo.getById(id);
        expect(rollo).toBeNull();
    });

})
