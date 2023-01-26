import { Badge, Box, Container, Grid, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
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
                <Box mb={4}>
                    <Container className="home" maxW="container.xl" >
                        <Box h="500px" w="100%" mb={7}>
                        <Image w="100%" borderRadius="lg" src={topMain} alt="main_image" />
                        </Box>
                        <Box mb={4} color="gray.900" alignItems="">
                        <h2>Welcome</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam consectetur praesentium minus laboriosam, facilis aliquam voluptates vel expedita vero, est iure porro, rerum repellendus consequatur deserunt id esse animi exercitationem aliquid. Quas incidunt praesentium officia iusto minima voluptas cumque.</p>
                        </Box>
                    </Container>
                </Box>
            </header>
            
            <Container className="threeBoxes" maxW="container.xl" mt={10}>
                <Grid templateColumns="repeat(3, 1fr)">
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
                    colorScheme="teal"
                    color="gray.800" 
                    bg="blue.100"
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

