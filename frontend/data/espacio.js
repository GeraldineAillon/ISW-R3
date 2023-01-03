import axios from 'axios'

const getEspacio= async (id)=>{
    const response= await axios.get(`${process.env.API_URL}/espaciocom/search/${id}`)
    return response
}
const getReserva= async (id)=>{
    const response= await axios.get(`${process.env.API_URL}/reservaespacio/search/${id}`)
    return response
}

const putEspacio = async (espacio,id) => {
    const response = await axios.put(`${process.env.API_URL}/espaciocom/update(${id})`, {
    });
    return response
}

module.exports={
    getEspacio,
    putEspacio,
    getReserva
}