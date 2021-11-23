const express = require('express');
const apiRoutesRollos = require('./apiRoutesRollo');

const apiV1 = express.Router();

apiV1.use('/rollos', apiRoutesRollos);


module.exports = apiV1;
