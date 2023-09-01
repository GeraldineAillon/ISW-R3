import {Input, Stack, Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'

const usuarioadmin=()=>{
    const [Usuarios,setUsuarios]= useState([])
    const router=useRouter()
    const getUsuarios = async()=>{
      const response=await axios.get(`${process.env.API_URL}/usuarios`)
      setUsuarios(response.data)
    }
  useEffect(()=>{
    getUsuarios()
  }, [])

const onDelete= async (id)=>{
  Swal.fire({
    title: 'Adveterncia',
    text:'¿Está seguro que desea eliminar a este cliente?',
    icon: 'info',
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText:'Sí, eliminar',
    cancelButtonText:'Cancelar'
  }).then(async(result)=>{
    if(result.isConfirmed){
      const response= await axios.delete(`${process.env.API_URL}/usuarios/delete/${id}`)
      router.push('/admin/admin')
      return response
    }
})
  
}

  const showUsuarios =()=>{
    return Usuarios.map(Usuarios =>{
        return(
            <Tr key={Usuarios._id} centerContent >
              <Td>{Usuarios.name}</Td>
              <Td>{Usuarios.correopersonal}</Td>
              <Td>{Usuarios.role}</Td>
              <Td>{Usuarios.nroTelefono}</Td>
              <Td>{Usuarios.sancionU}</Td>
             

              <HStack>
              <Button my={10} colorScheme="red" onClick={()=>onDelete(Usuarios._id)}>Eliminar</Button>
              <Button my={10}  colorScheme="twitter" onClick={()=>router.push(`auser/${Usuarios._id}`)} >Editar</Button>
              </HStack>
            </Tr>
        )
    })
  }
  return(
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Usuarios registrados</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Td fontWeight="bold">Nombre</Td>
            <Td fontWeight="bold">Correp</Td>
            <Td fontWeight="bold">Rol</Td>
            <Td fontWeight="bold">Nro Tel</Td>
            <Td fontWeight="bold">Sanción</Td>
          </Tr>
        </Thead>
      <Tbody>
      {showUsuarios()}
    </Tbody>
      </Table>
      <VStack>
        <Button my={20}colorScheme="gray" onClick={()=>router.push('/admin/admin')}>Volver</Button>
      </VStack>
    </Container>   
)
}
export default usuarioadmin