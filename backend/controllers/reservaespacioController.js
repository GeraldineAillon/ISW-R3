const Reservaespacio = require('../models/reservaespacio');
const User = require('../models/usuario');
const fechaactual=new Date();

//Funcion para crear reservas

const createReservaespacio= async (req,res)=>{
  const fechainicio=await fixDate(req.body.fechainicio)
  const fechatermino=await fixDate(req.body.fechatermino)
    const{espacioreservado,observacion,userreserva}= req.body;
    const newReservaespacio = new Reservaespacio({
        espacioreservado,
        fechainicio,
        fechatermino,
        observacion,
        userreserva
    })
    User.findById(userreserva,(err)=>{
            const sancion= req.body.sancionU
            if(sancion){
                return res.status(412).send({message:"El ususario tiene sanciones pendientes"},sancion)
            }
    })
    if(fechainicio>fechatermino|| fechainicio<fechaactual || fechatermino< fechaactual){
        return res.status(411).send({message:"Las fechas no coinciden"})
    }else{
    newReservaespacio.save((error,reservaespacio)=>{
        
        if(error){
            return res.status(400).send({message:"No se ha podido reservar el espacio"})
        }else{
            return res.status(201).send(reservaespacio)
            }
        })
    }
}


//funcion para arreglar fechas

const fixDate =(fecha)=>{
    const aux= new Date(Date.parse(fecha))
    const date = aux.toLocaleString('es-ES')
    return (date)
}


//Funcion para mostrar las reservas

const getReservaespacios= (req,res)=>{
     Reservaespacio.find({}).populate({path:'espaciocom'}).exec((error,reservaespacios)=>{
            if(error){
                return res.status(400).send({message:"No se pudo realizar la busqueda"})
            }
            if(reservaespacios.length === 0){
                return res.status(404).send({message:"No se encontraron reservas"})
            }
            return res.status(200).send(reservaespacios)
        })
}
//Funcion para actualizar datos de las reservas

const updateReservaespacio = async (req,res)=> {
    const {id} = req.params
    Reservaespacio.findById(id,async (err)=>{
    const fechainicio=await fixDate(req.body.fechainicio) 
    const fechatermino= await fixDate(req.body.fechatermino)
        if (fechainicio>fechatermino || fechainicio<fechaactual || fechatermino< fechaactual){
            return res.status(400).send({message:"las fechas son invalidas"})
        }else{
            Reservaespacio.findByIdAndUpdate(id,req.body,(error,reservaespacio)=>{        
            if(error){
                return res.status(400).send({message:"No se pudo actualizar la reserva"})
            }
            if (!reservaespacio){
                return res.status(404).send({message:"No se encontraron reservas"})
            } 
            return res.status(200).send({message:"Reserva actualizada"})
        })
        }
       
        
    })
    
}

//funcion para eliminar una reserva

const deleteReservaespacio = (req, res) =>{
    const {id} =req.params
    Reservaespacio.findByIdAndDelete(id,(error,reservaespacio)=>{
        if(error){
            return res.status(400).send({message:"No se pudo borrar la reserva"})
        }
        if(!reservaespacio){
            return res.status(404).send({message:"No se encontró la reserva"})
        }
        return res.status(200).send({message:"La reserva se eliminó con exito"})
    })
}

//funcion para encontrar una reserva en especifico
const getReservaespacio = (req,res)=>{
    const {id} =req.params
    Reservaespacio.findById(id,(error,reservaespacio)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(reservaespacio.length === 0){
            return res.status(404).send({message:"No se encontró la reserva"})
        }
        return res.status(200).send(reservaespacio)
    })
}

module.exports = {
    createReservaespacio,
    getReservaespacios,
    updateReservaespacio,
    deleteReservaespacio,
    getReservaespacio
}