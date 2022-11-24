const Reservaespacio = require('../models/reservaespacioModel');

//Funcion para crear los espacios comunes

const createReservaespacio=(req,res)=>{
    const{espacioreservado,fechainicio,fechatermino,observacion}= req.body;

    const newReservaespacio = new Reservaespacio({
        espacioreservado,
        fechainicio,
        fechatermino,
        observacion
    })
    newReservaespacio.save((error,reservaespacio)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido reservar el espacio"})
        }
        return res.status(201).send(reservaespacio)
    })
}
//Funcion para mostrar los espacios comunes

const getReservaespacios= (req,res)=>{
    Espaciocom.find({},(error,reservaespacios)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(espacioscom.length === 0){
            return res.status(404).send({message:"No se encontraron reservas"})
        }
        return res.status(200).send(reservaespacios)
    })
}
//Funcion para actualizar datos de el/los espacios comunes

const updateReservaespacio = (req,res)=> {
    const{id} = req.params
    Espaciocom.findByIdAndUpdate(id,req.body,(error,espaciocom)=>{
        if(error){
            return res.status(400).send({message:"No se pudo actualizar el espacio comun"})
        }
        if (!espaciocom){
            return res.status(404).send({message:"No se encontró el espacio comun"})
        }
        return res.status(200).send({message:"Espacio comun actualizado"})
    })
}


module.exports = {
    createReservaespacio,
    getReservaespacios,
    updateReservaespacio
}