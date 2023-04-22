const express = require('express');
const Pedido = require('../models/Pedido');

const router = express.Router();
const controllerPedido = require("../controllers/pedido.controller");

router.post('/insert', controllerPedido.insertarPedido);

router.get("/", controllerPedido.verPedidos);

module.exports = router;
