const sancion = require('../models/sancion');

const createsancion = (req,res)=>{
    const {tipo,tiempoSacnion,montoSancion} =req.body
    const newSancion = new sancion({
        tipo,
        tiempoSacnion,
        montoSancion
    })
    newSancion.save((error,sancion)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear el espacio común"});
        }
        return res.status(201).send(sancion);
    })
}

module.exports ={
    createsancion   
}