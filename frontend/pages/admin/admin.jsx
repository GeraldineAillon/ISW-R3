import {useState} from "react";
import axios from "axios";
import {Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'


const admin=()=>{
    const router=useRouter()
return(
<Container maxWidth={"container.lg"} centerContent> 
<Heading as='h1' size='2xl' noOfLines={1} my={10}>¿Que desea hacer?</Heading>
      
      <HStack>
        <Button  my={20} colorScheme="teal" onClick={()=>router.push('/admin/crearespaciocomun')}>Registrar espacio comun</Button>
        <Button  my={20} colorScheme="teal" onClick={()=>router.push('/admin/verespaciosadmin')}>Ver espacios comunes</Button>
        <Button  my={20} colorScheme="teal" onClick={()=>router.push('/admin/verreservasadmin')}>Ver reservas</Button>
        <Button  my={20} colorScheme="red" onClick={()=>router.push('/')}>Volver</Button>
      </HStack>
      </Container>
    )    
}
export default admin