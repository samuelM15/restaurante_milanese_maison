const express = require('express');
const {getAllmensagens,createMensage} = require('../Controladores/mensageControl');
const rota = express.Router();

rota.get('/mensagem',getAllmensagens);
rota.post('/mensagem',createMensage);

module.exports = rota;