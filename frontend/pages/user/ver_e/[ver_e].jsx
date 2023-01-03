import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button, Text,Image, Stack,Card,CardBody,CardFooter,ButtonGroup,Divider,Container,Heading} from '@chakra-ui/react'
import React from 'react'
import {getEspacio} from '../../../data/espacio'

export async function getServerSideProps(context) {
    try {
        const response = await getEspacio(context.query.ver_e)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {
        return {
            redirect: {
                destination: '/user/user',
                permanent: true
            }
        }
    }
}



const verespacio = (data) => {

    const router = useRouter()
    const { space } = router.query
    const [espacio] = useState(data)
    //console.log(product)
    //console.log(`/producto/editar/${product._id}`)
        return(
            <Container centerContent>
            <Card maxW='sm'>
  <CardBody>
    <Image
      src={espacio.data.foto}
      alt='Imagen del espacio'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{espacio.data.name}</Heading>
      <Text color='blue.600' fontSize='2x1'>Descripcion: </Text><Text>{espacio.data.description} </Text>
        <Text color='blue.600'fontSize='2x1'>Aforo: </Text><Text>{espacio.data.aforo}</Text>
        <Text color='blue.600'fontSize='2x1'>Estado del espacio: </Text><Text>{espacio.data.estadoespacio}</Text>
        {espacio.data.motivomantencion ? 
        <Stack><Text color='blue.600' fontSize='2x1'>Motivo mantencion: </Text>
        <Text>{espacio.data.motivomantencion}</Text></Stack>:null}
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Reservar
      </Button>
      <Button variant='solid' colorScheme='blue' onClick={()=>router.push('/user/u_ver_esp')} >
        Volver
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card> </Container>
        )
  }


export default verespacio
