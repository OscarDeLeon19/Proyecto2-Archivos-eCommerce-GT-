const express = require('express');
const Venta = require('../models/Venta');

const router = express.Router();
const controllerVenta = require("../controllers/venta.controller");

router.post('/insert', controllerVenta.insertarVenta);

router.get('/reporte1', controllerVenta.reporteProductosVendidos);

module.exports = router;
