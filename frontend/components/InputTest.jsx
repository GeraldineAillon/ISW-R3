import React from 'react'
import { Input, Stack, Button,HStack } from '@chakra-ui/react'
const InputTest = ({boton}) => {

  //kinda like a -for loop-. We have to 'map' msgs and then call the 'function' 
  //from the return of the InputTest -big function-
  /*Con esto hacemos la declaracion un solo 'INPUT' y se mostrará la misma cantidad de 'inputs' que 
    de mensajes que hayan en el array que pasamos por parametro a la funcion mas 'grande'(InputTest)-- 
    const mapearMensajes =()=>{
      return mensajes.map((mensajes, index)=>{
        return(
          <Stack key ={index}>
              <Input placeholder={mensajes}/>
          </Stack>
        )
      })
    }

  return (
    <Stack spacing={5}>
        {mapearMensajes()}
    </Stack>
  )*/
  return (
    <Stack>
      <Button onClick={() => window.location.href = ('http://146.83.198.35:1281/api/espacioscom')}>Espacios comúnes</Button>
      <Button onClick={() => window.location.href = ('http://146.83.198.35:1281/api/files')}>Fotos</Button>
      <Button onClick={() => window.location.href = ('http://146.83.198.35:1281/api/usuarios')}>usuarios</Button>
      <HStack>
          <Button onClick={boton}>hola</Button>
      </HStack>
    </Stack>
  )

}

export default InputTest