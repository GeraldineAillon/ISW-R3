const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const reservaEspacioSchema = new Schema({
    espacioReservado: {
        type: [
          Schema.ObjectId
        ],
        ref: espacioCom,
        required: true
      },
      FechaInicio: {
        day: null,
        hours: null,
        minutes: null,
        month: null,
        seconds: null,
        year: null
      },
      FechaTermino: {
        day: null,
        hours: null,
        minutes: null,
        month: null,
        seconds: null,
        year: null
      },
      observacion: {
        type: String,
        required: false,
        minLenght: 1,
        maxLength: 2000
      },
      estadoEspacio: {
        type: String,
        enum: [
          bueno,
          sucio,
          malo,
          requieremantención
        ]
      },
      estadoReserva: {
        type: String,
        enum: [
          Disponible,
          Reservado,
          En_mantención
        ]
      }
})

module.exports = mongoose.model('reservaEspacio',reservaEspacioSchema);