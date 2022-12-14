const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const route = './upload/' + req.params.archivo
        if (!fs.existsSync(route)) {
            fs.mkdirSync(route, { recursive: true })
        }
        cb(null, route)
    },
    filename: function (req, file, cb) {
        let fecha = new Date();
        fecha = fecha.getFullYear() + '_' + (fecha.getMonth() + 1) + '_' + fecha.getDate() + '_' + fecha.getHours() + '_' + fecha.getMinutes() + '_' + fecha.getSeconds()
        const nameFile = fecha + ' ' + file.originalname
        cb(null, nameFile)
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if (file.mimetype === 'image/png'|| file.mimetype === 'image/jpeg'|| file.mimetype==='image/jpg') {
            cb(null, true)
        } else {
            cb(1, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 10
    }
})

module.exports = upload