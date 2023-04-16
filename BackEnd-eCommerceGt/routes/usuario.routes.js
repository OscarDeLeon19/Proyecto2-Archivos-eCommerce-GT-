const express = require('express');
const Usuario = require('../models/Usuario');

const router = express.Router();
const controllerUsuario = require("../controllers/usuario.controller");

router.post('/', controllerUsuario.insertarUsuario);

router.get('/', controllerUsuario.buscarUsuarioLogin);

module.exports = router;
