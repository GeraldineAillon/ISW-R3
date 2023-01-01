import {Input, Stack, Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import InputTest from '../components/InputTest'
import axios from 'axios'

export default function Home(){

  const [espacios,setEspacios]= useState([])

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
              <Td>{espacio.aforo}</Td>
              <Td>{espacio.tiemporeserva}</Td>
            </Tr>
        )
    })
  }

  return(
    <Container maxW="container.xl" centerContent>

      <Heading textAlign={"center"} my={10}>Espacios</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Td>Nombre</Td>
            <Td>Descripcion</Td>
            <Td>Aforo</Td>
            <Td>Tiempo de reserva</Td>
          </Tr>
        </Thead>
        
        <Tbody>
          <Tr>
          </Tr>
          {showEspacios()}
        </Tbody>
      </Table>

    </Container>
        

  )
}
/*En el Tbody van los datos de la tabla declarada anteriormente con la forma:
    <Tbody>
      <Tr>
        <Td>dato 1</Td>
        <Td>dato 2</Td>
            . 
            . 
            . 
        <Td>dato n</Td>
      </Tr>
    </Tbody>
*/
