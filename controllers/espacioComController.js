const EspacioCom = require('../models/espacioCom');

const createEspacioCom = (req,res)=>{
    const {name,description,aforo,tiempoReserva} =req.body
    const newEspacioCom = new EspacioCom({
        name,
        description,
        aforo,
        tiempoReserva
    })
    newEspacioCom.save((error,espacioCom)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear el espacio común"});
        }
        return res.status(201).send(espacioCom);
    })
}

module.exports ={
    createEspacioCom    
}