const express = require('express');
const cors = require('cors');
const rota = require('./Rotas');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log("Corpo da requisição:", req.body);
    next();  // Sempre chame next() para continuar com a execução
});
app.use(cors());
app.use('/api', rota);

module.exports = app;