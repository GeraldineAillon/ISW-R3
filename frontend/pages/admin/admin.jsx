import {Button, Container,VStack,Heading} from '@chakra-ui/react'
import {useRouter} from 'next/router'


const admin=()=>{
    const router=useRouter()
return(
<Container maxWidth={"container.lg"} centerContent> 
<Heading as='h1' size='2xl' noOfLines={1} my={10}>¿Que desea hacer?</Heading>
      <VStack spacing='24px'>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/crearespaciocomun')}>Registrar espacio comun</Button>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/verespaciosadmin')}>Ver espacios comunes</Button>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/verreservasadmin')}>Ver reservas</Button>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/sanciones')}>Sancionar</Button>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/crearusuarios')}>Registrar nuevo usuario</Button>
        <Button   colorScheme="teal" onClick={()=>router.push('/admin/verusuarios')}>Ver usuarios</Button>
        <Button   colorScheme="red"  onClick={()=>router.push('/')}>Volver</Button>
      </VStack>
      </Container>
    )    
}
export default admin