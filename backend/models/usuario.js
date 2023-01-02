const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
        name: {
          type: String,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        correopersonal: {
          type: String,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        foto: {
          type: [Schema.ObjectId],
          ref : 'file',
          required:false
        
        },
        nroTelefono: {
          type: Number,
          required: true,
          minLenght: 1,
          maxLength: 100
        },
        reserva: {
          type: [Schema.ObjectId],
          ref:'reservaespacio',
          default:"No registra reservas"
        },
        role: {
          type: String,
          enum: [
            "admin",
            "user"
          ],
          default:"user"
        }

})

module.exports = mongoose.model('usuario',usuarioSchema);
