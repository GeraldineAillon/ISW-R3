import axios from 'axios'

const getEspacio= async (id)=>{
    const response= await axios.get(`${process.env.API_URL}/espaciocom/search/${id}`)
    return response
}
const getReserva= async (id)=>{
    const response= await axios.get(`${process.env.API_URL}/reservaespacio/search/${id}`)
    return response
}

const getUsuario= async (id)=>{
    const response= await axios.get(`${process.env.API_URL}/usuario/search/${id}`)
    return response
}

module.exports={
    getEspacio,
    getUsuario,
    getReserva
}