const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reservaespacioSchema = new Schema({
    espacioreservado: {
        type: Schema.ObjectId,
        ref: 'espaciocom',
        required: true
      },
      fechainicio:{
      type: String,
      required:true
      },

      fechatermino: {
      type: String,
      required:true
     },

      observacion: {
        type: String,
        required: false,
        minLenght: 1,
        maxLength: 2000
      },
      userreserva:{
        type: Schema.ObjectId,
        ref: 'usuario',
        required:true
      }
})

module.exports = mongoose.model ('reservaespacioSchema', reservaespacioSchema);