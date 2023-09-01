import {useState} from "react";
import axios from "axios";
import {FormControl,FormLabel,Textarea,Input, Stack, Button, Container,HStack,Heading} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'

const espacios=()=>{

    const [values,setValues]=useState({
        name:'',
        description:'',
        aforo:'',
        tiemporeserva:'',
        estadoreserva:'',
        estadoespacio:'',
        motivomantencion:''
    })
    const router= useRouter()

    const onSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.API_URL}/espaciocom`,values)
        if(response.status===201){
            Swal.fire({
                title:'Espacio creado',
                text:'El espacio se ha creado correctamente',
                icon:'success',
                confirmButtonText:'Ok'
            }).then((result)=>{
                if(result.isConfirmed){
                    router.push('/admin/admin')
                }
            })
        }
        } catch (error) {
            Swal.fire({
                title:'Error',
                text:'Hubo un error al registrar el espacio',
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
        <Heading textAlign={"center"} my={10}>Crear espacio común</Heading>
        <Stack>
            <FormControl isRequired>
                <FormLabel>Nombre espacio</FormLabel>
            <Input placeholder="Nombre del espacio comun" type={"text"} onChange={onChange} name="name"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Descripcion</FormLabel>
                <Textarea placeholder="Descripcion del espacio comun" type="text" onChange={onChange} name="description"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Aforo</FormLabel>
            <Input placeholder="Aforo disponible para el espacio" type={"number"} onChange={onChange} name="aforo"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Tiempo de reserva</FormLabel>
            <Input placeholder="Horas por las que se puede reserva el espacio" type={"number"} onChange={onChange} name="tiemporeserva"/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Estado de la reserva</FormLabel>
            <Input placeholder="disponible, reservado, en mantencion, etc"  type={"text"} onChange={onChange} name="estadoreserva"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Estado del espacio</FormLabel>
            <Input placeholder="sucio, bueno, malo, requiere mantencion,etc" type={"text"} onChange={onChange} name="estadoespacio"/>
            </FormControl>
            <FormControl>
                <FormLabel>Motivo de la mantencion</FormLabel>
            <Textarea placeholder="Motivo de la mantencion al espacio" type={"text"} onChange={onChange} name="motivomantencion"/>
            </FormControl>
            <HStack>
                <Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSubmit}>Crear espacio común</Button>
                <Button colorScheme={"red"} onClick={()=>router.push('/admin/admin')}>Volver</Button>
            </HStack>
        </Stack>
        </Container>
            )
}

export default espacios 