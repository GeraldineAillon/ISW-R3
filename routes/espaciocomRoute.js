const express = require('express');
const espaciocomController = require ('../controllers/espaciocomController');

const api = express.Router();

api.post('/espaciocom', espaciocomController.createEspaciocom);
api.get('/espacioscom',espaciocomController.getEspacioscom);
api.put('/espaciocom/update/:id', espaciocomController.updateEspaciocom);
api.delete('/espaicocom/',espaciocomController.deleteEspaciocom);
api.get('/espaciocom/search/:id',espaciocomController.getEspaciocom);

module.exports = api