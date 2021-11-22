const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Rollos 3D</h1>
    <h2>Variables de Entorno</h2>
    <ul>
        <li>Usuario: ${process.env.DATABASE_USER}</li>
        <li>Password: ${process.env.DATABASE_PASSWORD}</li>
        <li>Nombre: ${process.env.DATABASE_NAME}</li>
        <li>Host: ${process.env.DATABASE_HOST}</li>
        <li>Puerto: ${process.env.DATABASE_PORT}</li>
        <li>Interprete: ${process.env.DATABASE_TYPE}</li>
    </ul>
    
    `);
});

app.listen(process.env.PORT, () => {
    console.log("conectado al puerto " + process.env.PORT);
});
