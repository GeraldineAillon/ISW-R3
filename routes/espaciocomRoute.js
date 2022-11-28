const express = require('express');
const espaciocomController = require ('../controllers/espaciocomController');

const api = express.Router();

api.post('/espaciocom', espaciocomController.agregar_Espaciocom);
api.get('/espacioscom',espaciocomController.mostrar_Espacioscom);
api.put('/espaciocom/update/:id', espaciocomController.actualizar_Espaciocom);
api.delete('/espaciocom/delete/:id',espaciocomController.borrar_Espaciocom);
api.get('/espaciocom/search/:id',espaciocomController.buscar_Espaciocom);

module.exports = api