const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const espacioComSchema = new Schema({
    name:{
        type: String,
        required : true,
        minLenght:1,
        maxLenght:100
    },
   
    description:{
        type: String,
        required: true,
        minLenght:1,
        maxLength:1000
    },
    aforo:{
        type: String,
        required: true,
        minLenght:1,
        maxLength:100
    },
    tiempoReserva:{
        type: String,
        required: true,
        minLenght:1,
        maxLength:100
    }

})

module.exports = mongoose.model('espacioCom',espacioComSchema);