const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
        name: {
          type: String,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        foto: {
                type: [Schema.ObjectId],
        ref : 'file'},
        correoPersonal: {
          type: String,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        nroTelefono: {
          type: Number,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        role: {
          type: String,
          required: true,
          enum: [
            admin,
            user
          ]
        }

})

module.exports = mongoose.model('usuario',usuarioSchema);
