const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const sancionSchema = new Schema({
    tipo:{
        Type: String,
        enum: [
            "monetaria",
            "restriccion_reserva"
          ]
       
    },
    
    tiempoSancion:{
        type: String,
        required: true,
        minLenght:1,
        maxLength:1000
    },
    montoSancion:{
        type: Number,
        required: true,
        minLenght:1,
        maxLength:100
    }

})

module.exports = mongoose.model('sancion',sancionSchema);