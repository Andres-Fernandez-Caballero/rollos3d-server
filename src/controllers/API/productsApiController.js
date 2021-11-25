const RolloService = require('./../../services/rollos.service');

const productsApiController = {
    getAll: async (req, res) => {
       try{
           let rollos = await RolloService.getAll();
           res.json({
               data:{
                   rollos
               },
               mensaje: 'ok'
           });
       }catch (err){
           //res.state(500);
           res.json({
               data: {
                   err,
               },
               mensaje: 'error'
           })
       }
    }
}

module.exports = productsApiController;