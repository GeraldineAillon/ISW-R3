const Reservaespacio = require('../models/reservaespacioModel');

//Funcion para crear reservas

const createReservaespacio=(req,res)=>{
    const{/*espacioreservado,*/fechainicio,fechatermino,observacion}= req.body;

    const newReservaespacio = new Reservaespacio({
        //espacioreservado,
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
//Funcion para mostrar las reservas

const getReservaespacios= (req,res)=>{
    Reservaespacio.find({},(error,reservaespacios)=>{
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

const updateReservaespacio = (req,res)=> {
    const {id} = req.params
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