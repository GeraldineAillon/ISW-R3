
import {Input, Stack, Button, Container, Text, Heading,HStack, VStack} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'


export default function Home(){

  const router=useRouter()
  return(
    <Container maxW="container.xl" centerContent>
      <Heading textAlign={"center"} my={10}>Bienvenido</Heading>
      <p my={20} as='i'>Escoja un tipo de usuario</p>
      <HStack maxW="fit-content" >
        <Button  colorScheme="red" onClick={()=>router.push('/admin/admin')} my={10}>vista admin</Button>
        <Button  colorScheme="green" onClick={()=>router.push('/user/user')} my={10}>vista usuario</Button>
        </HStack>
      </Container>

  )
}
