import {Button, Container,Heading,HStack} from '@chakra-ui/react'
import {useRouter} from 'next/router'


const user=()=>{
    const router=useRouter()
    const user_id='639a563462f34e0f0d7f55db'
return(
<Container maxWidth={"container.lg"} centerContent>
<Heading as='h1' size='2xl' noOfLines={1} my={10}>¿Que desea hacer?</Heading>
          <HStack>
            <Button colorScheme="teal" my={30} onClick={()=>router.push('/user/u_ver_esp')}>Ver espacios comunes</Button>
            <Button colorScheme="red" my={20} onClick={()=>router.push('/')}>Volver</Button>
          </HStack>
        </Container>
    )
}
export default user