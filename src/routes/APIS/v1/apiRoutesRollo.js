const express = require('express');
const productsApiController = require('./../../../controllers/API/productsApiController');

apiRoutesRollos = express.Router();

apiRoutesRollos.get('/', productsApiController.getAll);


module.exports = apiRoutesRollos;
