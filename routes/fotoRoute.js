const express = require('express');
const fotoController = require ('../controllers/fotoController');

const api = express.Router();

api.post('/foto', fotoController.createFoto);
api.get('/fotos',fotoController.getFotos);
api.put('/foto/update/:id', fotoController.updateFoto);
api.delete('/foto/',fotoController.deleteFoto)
api.get('/foto/search/:id',fotoController.getFoto);

module.exports = api