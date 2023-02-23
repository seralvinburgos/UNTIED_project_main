import { Input, Text, Flex } from '@chakra-ui/react'

export default function Register() {
    return (
        <>
        <Text fontSize='5xl'>Register</Text>
        <Flex gap='4' justifyContent='center'>
        <Input placeholder='First Name' variant='filled' mb={3} type='text' />
        <Input placeholder='Last Name' variant='filled' mb={3} type='text' />
        </Flex>
        </>
    )
}