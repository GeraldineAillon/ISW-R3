const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fotoSchema = new Schema({
    nombre: {
        type:String,
        required:true
      },
      ruta:{
        type :String,
        required:true
      }
})

module.exports = mongoose.model ('fotoSchema', fotoSchema);