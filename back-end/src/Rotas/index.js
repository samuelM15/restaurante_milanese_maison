const express = require('express');
const rotasMensagens = require('./rotasMensagem');
const rotasPedidos = require('./rotasPedidos');
const rotasProdutos = require('./rotasProdutos');

const routa = express.Router();

routa.use(rotasMensagens);
routa.use(rotasPedidos);
routa.use(rotasProdutos);

module.exports = routa;