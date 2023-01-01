const Espaciocom = require('../models/espaciocom');
//Funcion para crear los espacios comunes

const agregar_Espaciocom= async(req,res)=>{
    const{name,fotoespacio,description,aforo,tiemporeserva,estadoreserva,estadoespacio,motivomantencion}= req.body
    const newEspaciocom = new Espaciocom({
        name,
        fotoespacio, 
        description, 
        aforo,
        tiemporeserva, 
        estadoreserva, 
        estadoespacio,
        motivomantencion
    })
    newEspaciocom.save((error,espaciocom)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear el espacio comun"})
        }

        return res.status(201).send(espaciocom)
    })
}

//Funcion para mostrar [TODOS] los espacios comunes

const mostrar_Espacioscom= (req,res)=>{
    Espaciocom.find({}).populate({path:'foto'}).exec((error,espacioscom)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(espacioscom.length === 0){
            return res.status(404).send({message:"No se encontraron espacios comunes"})
        }
        return res.status(200).send(espacioscom)
    })
}
//Funcion para actualizar datos de el/los espacios comunes

const actualizar_Espaciocom = (req,res)=> {
    const {id} = req.params
    
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

// Borra un espacio comun
const borrar_Espaciocom = (req,res) =>{
    const {id} =req.params
    Espaciocom.findByIdAndDelete(id,(error,espaciocom)=>{
        if(error){
            return res.status(400).send({message:"No se pudo borrar el espacio comun"})
        }
        if(!espaciocom){
            return res.status(404).send({message:"No se encontró el espacio comun"})
        }
        return res.status(200).send({message:"El espacio comun se eliminó con exito"})
    })
}


//Busca solo [UN] espacio comun
const buscar_Espaciocom = (req,res)=>{
    const {id} =req.params
    Espaciocom.findById(id,(error,espaciocom)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(espaciocom.length === 0){
            return res.status(404).send({message:"No se encontró el espacio comun"})
        }
        return res.status(200).send(espaciocom)
    })
}

module.exports = {
    agregar_Espaciocom,
    mostrar_Espacioscom,
    actualizar_Espaciocom,
    borrar_Espaciocom,
    buscar_Espaciocom

}