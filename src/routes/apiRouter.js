const express = require('express');
const apiV1 = require('./APIS/v1/apiV1');


const apiRouter = express.Router();

apiRouter.use('/v1', apiV1);


module.exports = apiRouter;
