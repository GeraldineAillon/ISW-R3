import {useState} from "react";
import axios from "axios";
import {FormControl,FormLabel,Textarea,Input, Stack, Button, Container, HStack, Heading} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'
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

const reservarespacio=(data)=>{
    const{espacio}=router.query

    const[values, setValues]=useState(data,{
            espacioreservado: {espacio},
            fechainicio:'',
            fechatermino:'',
            observacion:'',
            userreserva:''
        })
    const router= useRouter()

    const onSubmit =async(e)=>{
        e.preventDefault()
        console.log(values)
        try {
            const response = await axios.post(`${process.env.API_URL}/reservaespacio`,values)
        if(response.status===201){
            Swal.fire({
                title:'Espacio reservado',
                text:'El espacio se ha reservado correctamente',
                icon:'success',
                confirmButtonText:'Ok'
            }).then((result)=>{
                if(result.isConfirmed){
                      router.push('/user/user')
                }
            })
          
        }
        } catch (error) {
            Swal.fire({
                title:'Error',
                text:'Hubo un error al reservar el espacio',
                icon:'Error',
                confirmButtonText:'Ok'
            })
        }
        
    }

    const onChange=async(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }

    return(
        <Container maxW="container.md">
        <Heading textAlign={"center"} my={10}>Reservar espacio común</Heading>
        <p>Ingrese sus datos</p>
        <Stack>
            <FormControl isRequired>
                <FormLabel>Fecha inicio</FormLabel>
               <Input placeholder="Nombre completo" type={"text"} onChange={onChange} name="name"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Fecha termino</FormLabel>
                <Input placeholder="mail@email.com" type="text" onChange={onChange} name="correopersonal"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Observacion</FormLabel>
                <Textarea placeholder="Comentarios" type={"number"} onChange={onChange} name="nroTelefono"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Id del usuario</FormLabel>
                <Input placeholder="Id usuario" type="text" onChange={onChange} name="userreserva"/>
            </FormControl>
            <HStack>
                <Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSubmit}>Reservar</Button>
                <Button colorScheme={"teal"} onClick={()=>router.push('/user/u_ver_esp')}>Volver</Button>
            </HStack>
        </Stack>
        </Container>
            )
}

export default reservarespacio