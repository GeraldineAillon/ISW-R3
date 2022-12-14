const express = require('express')
const fileController = require('../controllers/fileController')
const upload = require('../middlewares/handleMulter')
const errorHandling = require('../middlewares/errorHandling')

const api = express.Router()

api.post("/file/:archivo", upload.array('archivos'), errorHandling.fileErrors, fileController.uploadNewFile)
api.get('/files', fileController.getFiles)
api.get('/file/download/:id', fileController.getSpecificFile)

module.exports = api