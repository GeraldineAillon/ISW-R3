const usuario = require('../models/usuario');

const createUsuario = (req,res)=>{
    const {name,foto,nroTelefono,role} =req.body
    const newUsuario = new usuario({
        name,
        foto,
        nroTelefono,
        role
    })
    newUsuario.save((error,usuario)=>{
        if(error){
            return res.status(400).send({message:"No se ha podido crear usuario"});
        }
        return res.status(201).send(usuario);
    })
}

module.exports ={
    createUsuario 
}