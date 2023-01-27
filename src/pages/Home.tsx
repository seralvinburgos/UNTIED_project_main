import { Badge, Box, Button, Container, Grid, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import topMain from "../assets/main4.jpg";
import mainLeft from "../assets/main1.jpg";
import mainCenter from "../assets/main2.jpg";
import mainRight from "../assets/main6.jpg";

export default function Home() {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <>
            <header>
                    <Container className="home" maxWidth='container.xl' w='100%' mb='40'>
                        <Box display="flex" flexDirection="column" position="relative">
                            <Box h="500px" maxWidth="100%" mb={7} color="gray.800">
                                <Image objectFit='cover' borderRadius="lg" src={topMain} alt="main_image" />
                            </Box>
                            <Box mt={3} pt='20' ps='10' color="gray.500" position="absolute" textAlign="center" fontSize='5xl' fontWeight='semibold'>
                            <p>Performance Running</p>
                            <Box ms='-20' mt='3'>
                                <Button 
                                    colorScheme='yellow' 
                                    marginInline={10} 
                                    borderRadius='50px'
                                    height='60px'
                                    width='150px'
                                    >Shop men's</Button>
                                <Button 
                                    colorScheme='yellow'
                                    borderRadius='50px'
                                    height='60px'
                                    width='150px'
                                    >Shop women's</Button>
                            </Box>
                            </Box>
                        </Box>
                    </Container>
            </header>
            
            <Container className="threeBoxes" maxW="container.xl" mt={10}>
                <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={mainLeft} alt="image_one" />
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={mainCenter} alt="image_two" />
                    </Box>
                    <Box>
                        <Image w="100%" borderRadius="lg" src={mainRight} alt="image_three" />
                    </Box>
                </Grid>
            </Container>

            <Container maxW="container.xl">
                <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={10} my="10">
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="yellow"
                    variant='outline'
                    >Running</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Marathon</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Track</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Casual</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Wide</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Narrow</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Ultra-Marathon</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Comfort</Badge>
                    <Badge 
                    borderRadius="3xl" 
                    px={4} 
                    py={2} 
                    mr="4" 
                    mb="4" 
                    textTransform="initial" 
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
                    >Business</Badge>
                </Box>
            </Container>
        </>
    )
}

