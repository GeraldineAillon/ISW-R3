import {useState} from "react";
import axios from "axios";
import {FormControl,FormLabel,Textarea,Input, Stack, Button, Container, HStack, Heading} from '@chakra-ui/react'
import Swal from 'sweetalert2'
import {useRouter} from 'next/router'

const usuarios=()=>{

    const [values,setValues]=useState({
        name:'',
        correopersonal:'',
        nroTelefono:'',
        role:''
    })
    const router= useRouter()

    const onSubmit =async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`${process.env.API_URL}/usuario`,values)
        if(response.status===201){
            Swal.fire({
                title:'Usuario creado',
                text:'El usuario se ha creado correctamente',
                icon:'success',
                confirmButtonText:'Ok'
            }).then((result)=>{
                if(result.isConfirmed){
                      router.push('/')
                }
            })		
		}
	} catch (error) {
		Swal.fire({
			title:'Error',
			text:'Hubo un error con la creacion del usuario',
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
	<Heading textAlign={"center"} my={10}>Crear Usuario</Heading>
	<Stack>
		<FormControl isRequired>
			<FormLabel>Nombre </FormLabel>
		   <Input  placeholder="Nombre del Usuario" type={"text"} onChange={onChange} name="name"/>
		</FormControl>
		<FormControl isnotRequired>
			<FormLabel>Correo personal</FormLabel>
			<Input placeholder="Correo electrónico del usuario" type="text" onChange={onChange} name="correopersonal"/>
		</FormControl>
		<FormControl isRequired>
			<FormLabel>Role</FormLabel>
		   <Input placeholder="El rol puede ser user o admin" type={"text"} onChange={onChange} name="role"/>
		</FormControl>
		<FormControl isRequired>
			<FormLabel>Número Telefónico</FormLabel>
		   <Input placeholder="Ingrese un número telefónico" type={"number"} onChange={onChange} name="nroTelefono"/>
		</FormControl>

	
		<HStack >
			<Button colorScheme="cyan" size="md" type="submit" my={5} onClick={onSubmit}>Crear nuevo usuario</Button>
			<Button colorScheme={"teal"} onClick={()=>router.push('/admin/admin')}>Volver</Button>
		</HStack>
	</Stack>
	</Container>
		)
}

export default usuarios 
