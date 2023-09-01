import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Button,Stack,Container,Heading,Input, FormControl, FormLabel, Textarea, HStack } from '@chakra-ui/react'
import React from 'react'
import {getUsuario} from '../../../data/espacio'
import Swal from 'sweetalert2'
import axios from "axios"

export async function getServerSideProps(context) {
    try {
        const response = await getUsuario(context.query.auser)
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
const actualizarusuario = (data) => {
    const router= useRouter()
    const { espacio } = router.query
    const [values,setValues]=useState(data,{
        name:'',
        correopersonal:'',
        nroTelefono:'',
        role:''
    })


    const onSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.put(`${process.env.API_URL}/usuario/update/${values.data._id}`,values)
            console.log(response)
        if(response.status===200){
            Swal.fire({
                title:'Usuario actualizado',
                text:'Elusuario se ha actualizado correctamente',
                icon:'success',
                confirmButtonText:'Ok'
            }).then((result)=>{
                if(result.isConfirmed){
                    router.push('/admin/verusuarios')
                }
            })
        }
        } catch (error) {
           console.log(error)
            Swal.fire({
                title:'Error',
                text:'Hubo un error al actualizar el usuario',
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
        <Heading textAlign={"center"} my={10}>Actualizar Usuario</Heading>
        <Stack>
            <FormControl isRequired>
                <FormLabel>Nombre </FormLabel>
               <Input defaultValue={values.data.name} placeholder="Nombre del Usuario" type={"text"} onChange={onChange} name="name"/>
            </FormControl>
            <FormControl isnotRequired>
                <FormLabel>Correo personal</FormLabel>
                <Input defaultValue={values.data.correopersonal} placeholder="Correo electrónico del usuario" type="text" onChange={onChange} name="correopersonal"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Role</FormLabel>
               <Input defaultValue={values.data.role} placeholder="El rol puede ser user o admin" type={"text"} onChange={onChange} name="role"/>
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Número Telefónico</FormLabel>
               <Input defaultValue={values.data.nroTelefono} placeholder="Ingrese un número telefónico" type={"number"} onChange={onChange} name="nroTelefono"/>
            </FormControl>
    
        
            <HStack >
                <Button colorScheme="cyan" size="md" type="submit" my={5} onClick={onSubmit}>Actualizar usuario</Button>
                <Button colorScheme={"teal"} onClick={()=>router.push('/admin/verusuarios')}>Volver</Button>
            </HStack>
        </Stack>
        </Container>
            )
}

export default actualizarusuario