const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reservaespacioSchema = new Schema({
    espacioReservado: {
        type: [Schema.ObjectId],
        ref: espacioCom,
        required: true
      },
      FechaInicio:{
      type:Date,
      required:true
      },

      FechaTermino: {
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