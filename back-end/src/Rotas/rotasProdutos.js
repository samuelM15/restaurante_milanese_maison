const express = require('express');
const {getAllProdutos, addProdutos, updateProdutos, deleteProdutos} = require('../Controladores/produtosContol');
const rota = express.Router();

rota.get('/produtos', getAllProdutos);
rota.post('/produtos', addProdutos);
rota.put('/produtos/:id', updateProdutos);
rota.delete('/produtos/:id', deleteProdutos);

module.exports = rota;