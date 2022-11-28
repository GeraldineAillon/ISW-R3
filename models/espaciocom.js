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
        ref : 'file'
      },
      description: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 2000
      },
      aforo: {
        type: Number,
        required : true,
        minLength: 1,
        maxLength: 100
      },
      tiemporeserva: {
        type: Number,
        required: true,
        minLength: 1,
        maxLength: 100
      },
      estadoreserva: {
        type:String,
        required: true,
        maxLength: 30
        },
        estadoespacio: {
        type:String,
        required: true,
        maxLength: 30
    }
})

module.exports = mongoose.model ('espaciocomSchema', espaciocomSchema);