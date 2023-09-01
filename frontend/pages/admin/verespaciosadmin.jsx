import {Input, Stack, Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'

const espaciosadmin=()=>{
  const [espacios,setEspacios]= useState([])
  const router=useRouter()
  const getEspacios = async()=>{
    const response=await axios.get(`${process.env.API_URL}/espacioscom`)
    setEspacios(response.data)
  }

  useEffect(()=>{
    getEspacios()
  }, [])

const onDelete= async (id)=>{
  Swal.fire({
    title: 'Adveterncia',
    text:'¿Está seguro que desea eliminar el espacio?',
    icon: 'info',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText:'Sí, eliminar',
    cancelButtonText:'Cancelar'
  }).then(async(result)=>{
    if(result.isConfirmed){
      const response= await axios.delete(`${process.env.API_URL}/espaciocom/delete/${id}`)
      router.push('/admin/admin')
      return response
    }
})
  
}

  const showEspacios =()=>{
    return espacios.map(espacio =>{
        return(
            <Tr key={espacio._id} centerContent >
              <Td>{espacio.name}</Td>
              <Td>{espacio.description}</Td>
              <Td>{espacio.aforo}</Td>
              <Td>{espacio.tiemporeserva} horas</Td>
              <Td>{espacio.estadoreserva}</Td>
              <Td>{espacio.estadoespacio}</Td>
              <Td>{espacio.motivomantencion}</Td>

              <HStack>
              <Button my={10} colorScheme="red" onClick={()=>onDelete(espacio._id)}>Eliminar</Button>
              <Button my={10}  colorScheme="teal" onClick={()=>router.push(`actualizar/${espacio._id}`)} >Editar</Button>
              </HStack>
            </Tr>
        )
    })
  }
  return(
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Espacios comunes</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Td fontWeight="bold">Nombre</Td>
            <Td fontWeight="bold">Descripcion</Td>
            <Td fontWeight="bold">Aforo</Td>
            <Td fontWeight="bold">Tiempo de reserva</Td>
            <Td fontWeight="bold">Estado de la reserva</Td>
            <Td fontWeight="bold">Estado del espacio</Td>
            <Td fontWeight="bold">Motivo de la mantencion</Td>
          </Tr>
        </Thead>
      <Tbody>
      {showEspacios()}
    </Tbody>
      </Table>
      <VStack>
        <Button my={20}colorScheme="gray" onClick={()=>router.push('/admin/admin')}>Volver</Button>
      </VStack>
    </Container>   
)
}
export default espaciosadmin