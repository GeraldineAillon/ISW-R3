import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Tr,Td,Button,Table, Text,Image, Stack,Card,CardBody,CardFooter,ButtonGroup,Divider,Container,Heading,Thead,Tbody,VStack, Input, FormControl, FormLabel, Textarea, HStack } from '@chakra-ui/react'
import React from 'react'
import {putEspacio} from '../../../data/espacio'

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
    const [space]=useState(data)
    
}

export default actualizarespaciocomun