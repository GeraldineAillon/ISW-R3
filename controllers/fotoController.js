const Foto = require('../models/foto');

//Funcion para crear fotos

const createFoto=(req,res)=>{
    const{nombre,ruta}= req.body;

    const newFoto = new Foto({
        nombre,
        ruta
    })
    newFoto.save((error,foto)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido guardar la foto"})
        }
        return res.status(201).send(foto)
    })
}
//Funcion para mostrar las fotos

const getFotos= (req,res)=>{
    Foto.find({},(error,fotos)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(fotos.length === 0){
            return res.status(404).send({message:"No se encontraron fotos"})
        }
        return res.status(200).send(fotos)
    })
}
//Funcion para actualizar fotos

const updateFoto = (req,res)=> {
    const {id} = req.params
    Foto.findByIdAndUpdate(id,req.body,(error,foto)=>{
        if(error){
            return res.status(400).send({message:"No se pudo actualizar la foto"})
        }
        if (!foto){
            return res.status(404).send({message:"No se encontraron fotos"})
        }
        return res.status(200).send({message:"Foto actualizada"})
    })
}

//funcion para eliminar una foto

const deleteFoto = (req, res) =>{
    const {id} =req.params
    Foto.findByIdAndDelete(id,(error,foto)=>{
        if(error){
            return res.status(400).send({message:"No se pudo borrar la foto"})
        }
        if(!foto){
            return res.status(404).send({message:"No se encontró la foto"})
        }
        return res.status(200).send({message:"La foto se eliminó con exito"})
    })
}
const getFoto = (req,res)=>{
    const {id} =req.params
    Foto.findById(id,(error,foto)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(foto.length === 0){
            return res.status(404).send({message:"No se encontró la foto"})
        }
        return res.status(200).send(foto)
    })
}

module.exports = {
    createFoto,
    getFotos,
    updateFoto,
    deleteFoto,
    getFoto
}