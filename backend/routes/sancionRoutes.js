const express = require('express');
const sancionController = require('../controllers/sancionController');
const api = express.Router();

api.post('/sancion',sancionController.createsancion);
api.get('/sanciones',sancionController.getsancion);
api.put('/sancion/update/:id', sancionController.updateSancion);
api.delete('/sancion/delete/:id',sancionController.deleteSancion)



module.exports = api;
