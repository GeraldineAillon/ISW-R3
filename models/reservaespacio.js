const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reservaespacioSchema = new Schema({
    espacioreservado: {
        type: Schema.ObjectId,
        ref: 'espaciocom',
        required: true
      },
      fechainicio:{
      type:Date,
      required:true
      },

      fechatermino: {
      type:Date,
      required:true
     },

      observacion: {
        type: String,
        required: false,
        minLenght: 1,
        maxLength: 2000
      }
})

module.exports = mongoose.model ('reservaespacioSchema', reservaespacioSchema);