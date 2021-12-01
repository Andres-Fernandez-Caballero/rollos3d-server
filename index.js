const express = require('express');
const apiRouter = require('./src/routes/apiRouter'); 

require('dotenv').config();

const app = express();

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send(`
    <head>
        <title>Dasboard</title>
        
        <style>
            *{
                color:darkslategray;
            }
            body{
                margin: 2rem 1rem 1rem 2rem;
            }
            h1 {
                color:cornflowerblue;
            }
            dt {
                font-weight: bold;
                font-size: 1.1rem;
            }
        </style>
    </head>
    <body>
        <h1>Rollos 3D</h1>

    <h2>Rutas API</h2>
    <nav>
        <ul>
            <li><a href="api/v1/rollos">Rollos List </a></li>
            <li><a href="#">Rollos Detail </a></li>
        </ul>
    </nav>
    

    <h2>Variables de Entorno</h2>
    <dl>
        <dt>Usuario:</dt>
        <dd>${process.env.DATABASE_USER}.</dd>
        
        <dt>Password:</dt>
        <dd>${process.env.DATABASE_PASSWORD}</dd>
        
        <dt>Nombre:</dt>
        <dd>${process.env.DATABASE_NAME}</dd>
        
        <dt>Host:</dt>
        <dd>${process.env.DATABASE_HOST}</dd>
        
        <dt>Port:</dt>
        <dd>${process.env.DATABASE_PORT}</dd>
        
        <dt>Interprete:</dt>
        <dd>${process.env.DATABASE_TYPE}</dd>
    </dl>
    </body>
    
    
    `);
});

app.listen(process.env.PORT, () => {
    console.log(`=============================`);
    console.log(`Conectado al puerto: ${process.env.PORT}`);
    console.log(`Modo: ${process.env.NODE_ENV}`);
    console.log('');
    console.log(`http://localhost:${process.env.PORT}`);
    console.log(`============================`);
});

