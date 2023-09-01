import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button,Stack,Container,Heading,Input, FormControl, FormLabel, Textarea, HStack } from '@chakra-ui/react'
import React from 'react'
import {getEspacio} from '../../../data/espacio'
import Swal from 'sweetalert2'
import axios from "axios"

export async function getServerSideProps(context) {
    try {
        const response = await getEspacio(context.query.actualizar)
        return {
            props: {
                data: response.data
            }
        }
    } catch (err) {
        return {
            props:{
                data:null
            }
        }
    }
}
const actualizarespaciocomun = (data) => {
    const router= useRouter()
    const { espacio } = router.query
    const [values,setValues]=useState(data,{
            name:'',
            description:'',
            aforo:'',
            tiemporeserva:'',
            estadoreserva:'',
            estadoespacio:'',
            motivomantencion:''
    })


    const onSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.put(`${process.env.API_URL}/espaciocom/update/${values.data._id}`,values)
            console.log(response)
        if(response.status===200){
            Swal.fire({
                title:'Espacio actualizado',
                text:'El espacio se ha actualizado correctamente',
                icon:'success',
                confirmButtonText:'Ok'
            }).then((result)=>{
                if(result.isConfirmed){
                    router.push('/admin/verespaciosadmin')
                }
            })
        }
        } catch (error) {
           console.log(error)
            Swal.fire({
                title:'Error',
                text:'Hubo un error al actualizar el espacio',
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
        <Heading textAlign={"center"} my={10}>Actualizar {values.data.name}</Heading>
        <Stack>
            <FormControl>
                <FormLabel>Nombre espacio</FormLabel>
            <Input defaultValue={values.data.name} placeholder="Nombre del espacio comun" type={"text"} onChange={onChange} name="name"/>
            </FormControl>
            <FormControl>
                <FormLabel>Descripcion</FormLabel>
                <Textarea defaultValue={values.data.description} placeholder="Descripcion del espacio comun" type="text" onChange={onChange} name="description"/>
            </FormControl>
            <FormControl>
                <FormLabel>Aforo</FormLabel>
            <Input defaultValue={values.data.aforo} placeholder="Aforo disponible para el espacio" type={"number"} onChange={onChange} name="aforo"/>
            </FormControl>
            <FormControl>
                <FormLabel>Tiempo de reserva</FormLabel>
            <Input defaultValue={values.data.tiemporeserva} placeholder="Horas por las que se puede reserva el espacio" type={"number"} onChange={onChange} name="tiemporeserva"/>
            </FormControl>

            <FormControl>
                <FormLabel>Estado de la reserva</FormLabel>
            <Input defaultValue={values.data.estadoreserva} placeholder="disponible, reservado, en mantencion, etc"  type={"text"} onChange={onChange} name="estadoreserva"/>
            </FormControl>
            <FormControl>
                <FormLabel>Estado del espacio</FormLabel>
            <Input defaultValue={values.data.estadoespacio} placeholder="sucio, bueno, malo, requiere mantencion,etc" type={"text"} onChange={onChange} name="estadoespacio"/>
            </FormControl>
            <FormControl>
                <FormLabel>Motivo de la mantencion</FormLabel>
            <Textarea defaultValue={values.data.motivomantencion} placeholder="Motivo de la mantencion al espacio" type={"text"} onChange={onChange} name="motivomantencion"/>
            </FormControl>
            <HStack>
                <Button colorScheme="teal" size="md" type="submit" my={5} onClick={onSubmit}>Actualizar</Button>
                <Button colorScheme={"red"} onClick={()=>router.push('/admin/verespaciosadmin')}>Volver</Button>
            </HStack>
        </Stack>
        </Container>
            )
}

export default actualizarespaciocomun