const express = require('express');
const usuarioController = require('../controllers/usuarioController.js');

const api = express.Router();

api.post('/usuario',usuarioController.createUsuario);
api.get('/usuario',usuarioController.getusuario);
api.put('/usuario/update/:id', usuarioController.updateusuario);
api.delete('/usuario/delete/:id',usuarioController.deleteusuario)

module.exports = api;