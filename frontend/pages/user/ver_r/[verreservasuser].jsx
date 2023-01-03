import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tr,Td,Button,Table,Container,Heading,Thead,Tbody,VStack} from '@chakra-ui/react'
import React from 'react'
import {getReserva} from '../../../data/espacio'
import Swal from 'sweetalert2'

export async function getServerSideProps(context) {
    try {
        const response = await getReserva(context.query.ver_r)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {

        return {
            redirect: {
                destination: '/user/u_ver_esp',
               permanent: true
            }
        }
    }
}
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
        router.push('/user/user')
        return response
      }
  })
    
  }
const verreservas=(data)=>{
    const router = useRouter()
    const { reservaa } = router.query
    const [reservas] = useState(data)
    //console.log(product)
    //console.log(`/producto/editar/${product._id}`)
    const showReservas =()=>{
        return reservas.map(reserva =>{
            return(
                <Tr key={reserva._id}>
                  <Td>{reserva.espacioreservado}</Td>
                  <Td>{reserva.fechainicio}</Td>
                  <Td>{reserva.fechatermino}</Td>
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
              </Tr>
            </Thead>
          <Tbody>
          {showReservas()}
        </Tbody>
          </Table>
          <VStack>
            <Button my={20} onClick={()=>router.push('/user/user')}>Volver</Button>
          </VStack>
        </Container>   
        </Container>
    )
}
export default verreservas