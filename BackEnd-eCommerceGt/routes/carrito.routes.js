const express = require('express');
const Carrito = require('../models/Carrito');

const router = express.Router();
const controllerCarrito = require("../controllers/carrito.controller");

router.post('/create', controllerCarrito.insertarCarrito);

router.post('/buscar', controllerCarrito.buscarCarrito);

module.exports = router;
