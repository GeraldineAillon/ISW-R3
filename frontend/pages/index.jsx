import {Input, Stack, Button, Container, Text, HStack, VStack} from '@chakra-ui/react'
import {useState} from 'react'
import InputTest from '../components/InputTest'

export default function Home(){
  const boton= ()=>{
  window.location.href=('http://146.83.198.35:1281/api/files')
  }
  return(
    <Stack>
      <InputTest boton={boton}/>
    </Stack>
    
  )
}
