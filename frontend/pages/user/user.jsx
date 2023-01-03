import { useState, useEffect } from 'react'
import { Button, Container, Input, Stack, Text, HStack, Table, Thead, Tbody, Tfoot, Tr, Th, Td, Heading, } from '@chakra-ui/react'
import axios from 'axios'
import { useRouter } from 'next/router'

const productos = () => {
    const [Usuarios, setUsuarios] = useState([])
    const router = useRouter()

    const getUsuarios = async () => {
        const response = await axios.get(`${process.env.API_URL}/products`)
        setUsuarios(response.data)
    }

    useEffect(() => {
        getUsuarios()
    }, [])


    const showUsuarios = () => {
        return Usuarios.map(Usuarios => {
            return (
                <Tr key={Usuarios._id}>
                    <Td>{Usuarios.name}</Td>
                    <Td>{Usuarios.correopersonal}</Td>
                    <Td>{Usuarios.role}</Td>
                    <Td><Button onClick={() => router.push(`/producto/ver/${product._id}`)}>Ver mas</Button></Td>
                </Tr>
            )
        })
    }

    return (
        <Container maxW="container.xl" centerContent>
            <Heading textAlign={"center"} my={10}>Usuarios</Heading>
            <Button colorScheme="teal" onClick={() => router.push('/user/user')}>Crear Cliente</Button>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Td>Nombre</Td>
                        <Td>Foto</Td>
                        <Td>Correo</Td>
                        <Td>Numero</Td>
                        <Td>Rol</Td>
                        <Td>Reserva</Td>

                    </Tr>
                </Thead>
                <Tbody>
                    {showUsuarios()}
                </Tbody>
            </Table>
        </Container>
    )
}

export default Usuarios