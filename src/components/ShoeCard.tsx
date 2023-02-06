import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'

 export default function ShoeCard() {
    return (
        <>
            <Card maxW='sm'>
                <CardBody>
                    <Image
                    src='./assets/images/card1.jpg'
                    alt='Green Nike'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque similique iusto incidunt nostrum a quaerat nam dolorem modi accusantium facilis?
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        $165
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                    <Button variant='filled' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </>
    )
 }
 
 