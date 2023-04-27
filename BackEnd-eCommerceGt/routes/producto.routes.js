const express = require('express');
const Producto = require('../models/Producto');

const router = express.Router();
const controllerProducto = require("../controllers/producto.controller");

router.get('/all', controllerProducto.verProductos);

router.get('/filter', controllerProducto.verProductosFiltrados);

router.post('/agregar', controllerProducto.agregarProducto);

router.get('/misProductos', controllerProducto.verMisProductos);

router.get('/verProductoId', controllerProducto.verProductoPorId);

router.put('/actualizarProducto', controllerProducto.actualizarProducto);

router.delete('/borrarProducto', controllerProducto.borrarProducto);

router.get('/pendientes', controllerProducto.verProductosPendientes);

router.put('/cambiarEstado', controllerProducto.cambiarEstado);

router.get('/reporte5', controllerProducto.reporteProductosEnVenta);

module.exports = router;
