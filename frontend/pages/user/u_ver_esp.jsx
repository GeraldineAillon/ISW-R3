import {Button, Container,VStack,Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import React from 'react'

const espaciosuser=()=>{
  const [espacios,setEspacios]= useState([])
  const router=useRouter()
  const getEspacios = async()=>{
    const response=await axios.get(`${process.env.API_URL}/espacioscom`)
    setEspacios(response.data)
  }

  useEffect(()=>{
    getEspacios()
  }, [])

  const showEspacios =()=>{
    return espacios.map(espacio =>{
        return(
            <Tr key={espacio._id}>
              <Td>{espacio.name}</Td>
              <Td>{espacio.description}</Td>
              <Td><Button colorScheme="teal" onclick={()=>router.push(`crear_reserva/${espacio._id}`)}>Reservar</Button></Td>
              <Td><Button colorScheme="teal" onClick={()=>router.push(`ver_e/${espacio._id}`)}>Ver mas detalles</Button></Td>
            </Tr>
        )
    })
  }
  return(
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Espacios comunes</Heading>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Td>Nombre</Td>
            <Td>Descripcion</Td>
          </Tr>
        </Thead>
      <Tbody>
      {showEspacios()}
    </Tbody>
      </Table>
      <VStack>
        <Button my={20} onClick={()=>router.push('/user/user')}>Volver</Button>
      </VStack>
    </Container>   
)
}
export default espaciosuser