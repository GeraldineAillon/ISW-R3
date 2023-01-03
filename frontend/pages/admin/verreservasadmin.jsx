import {Input, Stack, Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import React from 'react'
import Swal from 'sweetalert2'
const reservasadmin=()=>{
  const [reservas,setReservas]= useState([])
  const router=useRouter()
  const getReservas = async()=>{
    const response=await axios.get(`${process.env.API_URL}/reservaespacios`)
    setReservas(response.data)
  }

  useEffect(()=>{
    getReservas()
  }, [])

  const onDelete= async (id)=>{
    Swal.fire({
      title: 'Adveterncia',
      text:'¿Está seguro que desea eliminar la reserva?',
      icon: 'info',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonText:'Sí, eliminar',
      cancelButtonText:'Cancelar'
    }).then(async(result)=>{
      if(result.isConfirmed){
        const response= await axios.delete(`${process.env.API_URL}/reservaespacio/delete/${id}`)
        router.push('/admin/admin')
        return response
      }
  })
    
  }

  const showReservas =()=>{
    return reservas.map(reserva =>{
        return(
            <Tr key={reserva._id}>
              <Td>{reserva.espacioreservado}</Td>
              <Td>{reserva.fechainicio}</Td>
              <Td>{reserva.fechatermino}</Td>
              <Td>{reserva.userreserva}</Td>
              <Td><Button colorScheme="blue" onClick={()=>onDelete(reserva._id)}>Eliminar</Button></Td>
            </Tr>
        )
    })
  }
  return(
    <Container>
    <Heading my={20}>Espacios Reservados</Heading>
    <Container maxW="container.xl" centerContent>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Td>Espacio reservado</Td>
            <Td>Fecha inicio</Td>
            <Td>Fecha termino</Td>
            <Td>Usuario que reserva</Td>
          </Tr>
        </Thead>
      <Tbody>
      {showReservas()}
    </Tbody>
      </Table>
      <VStack>
        <Button my={20} onClick={()=>router.push('/admin/admin')}>Volver</Button>
      </VStack>
    </Container>   
    </Container>
)
}
export default reservasadmin