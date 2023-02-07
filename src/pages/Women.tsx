import { Box, Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'; 
import card1 from '../assets/card1.jpg'


export default function Women() {
    return (
        <>
            <Box className="men">
                <Box fontSize='6xl' mb='3' mt='10' ms='10'>
                Women's shoes
                </Box>
                <Box fontSize='2xl' mb='10' ms='10'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, assumenda veritatis ullam quas autem provident enim ea id aliquid deleniti.</p>
                </Box>
            </Box>
            <Box h='80vh'
                backgroundColor='pink.100'
                w='100%'
                display='flex'
                >
            </Box>
            <Box>
                <Card maxW='xs'>
                    <CardBody>
                        <Image
                        boxSize='sm'
                        src={card1}
                        alt='Green Nike'
                        borderRadius='md'
                        />
                        <Stack mt='3' spacing='2'>
                        <Heading size='sm'>Sneaker 1</Heading>
                        <Text fontSize='xs'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                        </Text>
                        <Text color='yellow.500' fontSize='xl'>
                            $165
                        </Text>
                        </Stack>
                    </CardBody>
                    <CardFooter mt='-5'>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='yellow' size='sm'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='yellow' size='sm'>
                            Add to cart
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </>
    )
}