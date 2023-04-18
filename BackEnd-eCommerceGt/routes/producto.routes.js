const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();
const controllerProducto = require("../controllers/producto.controller");

router.get('/all', controllerProducto.verProductos);

module.exports = router;
