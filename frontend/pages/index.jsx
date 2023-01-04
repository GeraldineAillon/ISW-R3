import {Button, Container,Heading,HStack} from '@chakra-ui/react'
import {useRouter} from 'next/router'


export default function Home(){

  const router=useRouter()
  return(
    <Container maxW="container.xl" centerContent>
        <Heading as='h2' size='2xl' my={20}>Bienvenido</Heading>
      <Heading as='h5' size='sm'>Escoja un tipo de usuario</Heading>
      <HStack maxW="fit-content" >
        <Button colorScheme="teal" onClick={()=>router.push('/admin/admin')} my={10}>vista admin</Button>
        <Button colorScheme="teal" onClick={()=>router.push('/user/user')} my={10}>vista usuario</Button>
        </HStack>
      </Container>   
  )
}
