const express = require('express');
const Pedido = require('../models/Pedido');

const router = express.Router();
const controllerPedido = require("../controllers/pedido.controller");

router.post('/insert', controllerPedido.insertarPedido);

router.get("/", controllerPedido.verPedidos);

router.get("/enCurso", controllerPedido.verPedidosEnCurso);

router.put("/cambiarEstado", controllerPedido.modificarEstado);

module.exports = router;
