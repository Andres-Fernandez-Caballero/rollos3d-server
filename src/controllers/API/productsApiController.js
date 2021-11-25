const RolloService = require('./../../services/rollos.service');
const httpStatus= require('http-status-codes');


const productsApiController = {
    getAll: async (req, res) => {
       try{
           let rollos = await RolloService.getAll();
           res.status(httpStatus.OK);
           res.json({
               data:{
                   rollos
               },
               mensaje: 'ok'
           });
       }catch (err){
           res.status(500);
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