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
            return res.status(400).send({message:"No se ha podido crear la sancion"});
        }
        return res.status(201).send(sancion);
    })
}

const getsancion= (req,res)=>{
    sancion.find({},(error,sancion)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(sancion.length === 0){
            return res.status(404).send({message:"No se encontraron sanciones asociadas"})
        }
        return res.status(200).send(sancion)
    })
}

const updateSancion = (req,res)=> {
    const {id} = req.params
    sancion.findByIdAndUpdate(id,req.body,(error,sancion)=>{
        if(error){
            return res.status(400).send({message:"No se pudo actualizar la sancion asociada"})
        }
        if (!sancion){
            return res.status(404).send({message:"No se encontraron sanciones"})
        }
        return res.status(200).send({message:"Datos de la sancion actualizados"})
    })
}

const deleteSancion = (req, res) =>{
    const {id} =req.params
    sancion.findByIdAndDelete(id,(error,sancion)=>{
        if(error){
            return res.status(400).send({message:"No se pudo borrar la sancion asociada"})
        }
        if(!sancion){
            return res.status(404).send({message:"No se encontró la sancion"})
        }
        return res.status(200).send({message:"Sancion eliminada"})
    })
}

module.exports ={  
    createsancion,
    getsancion ,
    updateSancion,
    deleteSancion
}
