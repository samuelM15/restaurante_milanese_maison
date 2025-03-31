const express = require('express');
const {getPedidos, addPedidos} = require('../Controladores/pedidosControl');
const rota = express.Router();

rota.get('/pedidos', getPedidos);
rota.post('/pedidos', addPedidos);

module.exports = rota;