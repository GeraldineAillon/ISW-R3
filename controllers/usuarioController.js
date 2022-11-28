const usuario = require('../models/usuario');

const createUsuario = (req,res)=>{
    const {name,foto,correopersonal,nroTelefono,role,reserva} =req.body
    const newUsuario = new usuario({
        name,
        foto,
        correopersonal,
        nroTelefono,
        role,
        reserva
    })
    newUsuario.save((error,usuario)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear usuario"});
        }
        return res.status(201).send(usuario);
    })
}
const getusuarios= (req,res)=>{
    usuario.find((error,usuario)=>{
        if(error){
            return res.status(400).send({message:"No se pudo realizar la busqueda"})
        }
        if(usuario.length === 0){
            return res.status(404).send({message:"No se encontraró el usuario"})
        }
        return res.status(200).send(usuario)
    })
}

const updateusuario = (req,res)=> {
    const {id} = req.params
    usuario.findByIdAndUpdate(id,req.body,(error,usuario)=>{
        if(error){
            return res.status(400).send({message:"No se pudo actualizar los datos del usuario"})
        }
        if (!usuario){
            return res.status(404).send({message:"No se encontraron usuario"})
        }
        return res.status(200).send({message:"Datos usuarios actualizado"})
    })
}

const deleteusuario = (req, res) =>{
    const {id} =req.params
    usuario.findByIdAndDelete(id,(error,foto)=>{
        if(error){
            return res.status(400).send({message:"No se pudo borrar la usuario"})
        }
        if(!usuario){
            return res.status(404).send({message:"No se encontró el usuario especificado"})
        }
        return res.status(200).send({message:"Usuario eliminado"})
    })
}

module.exports ={
    createUsuario, 
    getusuarios,
    updateusuario,
    deleteusuario
}
