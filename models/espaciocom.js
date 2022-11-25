const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const espaciocomSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
      },
      fotoespacio: {
        type: [Schema.ObjectId],
        ref : 'foto',
        required: false
      },
      description: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 2000
      },
      aforo: {
        type: String,
        required : true,
        minLength: 1,
        maxLength: 100
      },
      tiempoReserva: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 100
      },
      estadoReserva: {
        type:String,
        required: true,
        minLength:1,
        maxLength:40
        },
        estadoEspacio: {
        type:String,
        required: true,
        minLength:1,
        maxLength:40
    }
})

module.exports = mongoose.model ('espaciocomSchema', espaciocomSchema);