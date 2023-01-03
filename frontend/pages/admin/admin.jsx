import {useState} from "react";
import axios from "axios";
import {FormErrorMessage,FormHelperText,FormControl,FormLabel,Textarea,Input, Stack, Button, Container, Text, HStack, VStack, InputGroup, Heading, Table, Thead, Tr, Td,Tbody} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'


const admin=()=>{
    const router=useRouter()
return(
<Container maxWidth={"container.lg"} centerContent> 
      <Text>Entraste como administrador</Text> 
      <HStack>
        <Button my={20} onClick={()=>router.push('/crearespaciocomun')}>Registrar espacio comun</Button>
        <Button my={20} onClick={()=>router.push('/espaciosadmin')}>Ver espacios comunes</Button>
        <Button my={20} onClick={()=>router.push('/admin/sanciones')}>Sancionar</Button>
        <Button my={20} onClick={()=>router.push('/admin/crearusuarios')}>Crear Usuario</Button>
        <Button my={20} onClick={()=>router.push('/admin/verusuarios')}>Usuarios</Button>

        <Button my={20}>Ver reservas</Button>
        <Button my={20} onClick={()=>router.push('/')}>Volver</Button>
    
      </HStack>
      </Container>
    )    
}
export default admin