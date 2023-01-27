import { Box, Button, Container, Grid, Image, useColorMode, useColorModeValue, Textarea, VStack, Center } from "@chakra-ui/react";
import topMain from "../assets/main4.jpg";
import mainLeft from "../assets/main1.jpg";
import mainCenter from "../assets/main2.jpg";
import mainRightTop from "../assets/main6.jpg";
import mainRightBottom from "../assets/main7.jpg"
import activitiesPic from "../assets/narrow1.jpg";

export default function Home() {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <>
            <Box className="home"
                minH='90vh'
                width='auto'
                overflow='hidden'
                >
                <Box display="flex" flexDir='column' position="relative">
                    <Box position='absolute'>
                        <Image 
                            objectFit='cover'  
                            objectPosition='bottom right'
                            minH='90vh'
                            maxW='100%'
                            height='auto'
                            src={topMain} alt="main_image" />
                    </Box>
                    <Box position='relative'
                        color="blackAlpha.800" 
                        fontSize='5xl' 
                        fontWeight='semibold'
                        mt='20'
                        ms='5'
                        >
                        <p>Performance Running
                        </p>
                        <Box>
                            <Button 
                                colorScheme='yellow' 
                                marginInline={10} 
                                borderRadius='50px'
                                height='60px'
                                width='150px'
                                >Shop men's
                            </Button>
                            <Button 
                                colorScheme='yellow'
                                borderRadius='50px'
                                height='60px'
                                width='150px'
                                >Shop women's
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            

            <Box 
                minH='55vh'
                width='100%'
                backgroundColor='whiteAlpha.500'
                display='flex'
                flexDirection='row'

            >
                <Box>
                    <Textarea 
                        writing-mode='vertical-lr' 
                        textTransform='uppercase' 
                        transform='rotate(-90deg)'
                        fontWeight='semibold'
                        ms='-5'
                        mt='10'
                        letterSpacing='2px'
                        border='none'
                        >
                            Activities
                        </Textarea>
                </Box>
                <Box 
                    className='activitiesText'
                    width='50%'
                    >
                    <VStack
                        spacing={1}
                        alignItems='left'
                        fontSize="6xl"
                        fontWeight="semibold"
                        mt='25%'
                        >
                        <Box>
                            Trail Running
                        </Box>
                        <Box>
                            Road Running
                        </Box>
                        <Box>
                            Active Lifestyle
                        </Box>
                        <Box>
                            Hiking
                        </Box>
                        <Box>
                            Comfort Travel
                        </Box>
                    </VStack>
                </Box>
                <Box 
                    className="activitiesPic"
                    minH='55vh'
                    width='50%'
                >
                    <Container centerContent>
                        <Image 
                            minH='40vh'
                            objectFit='cover'
                            maxW='90%'
                            height='auto'
                            boxSize='md'
                            mt='20%'
                            borderRadius='25px'
                            src={activitiesPic} alt='activitiesPicture'
                        />
                    </Container>
                </Box>
            </Box>
            <Box 
                className="threeBoxes"
                minH='55vh'
                maxH='56vh'
                width='100%'
                height='auto'
                bgColor='whiteAlpha'
                overflow='hidden'
                >
                <Grid templateColumns="repeat(3, 1fr)">
                    <Box>
                        <Image 
                            minH='50vh'
                            objectFit='cover'
                            w="95%" 
                            borderRadius="lg" 
                            src={mainLeft} alt="image_one" />
                    </Box>
                    <Box>
                        <Image 
                            minH='50vh'
                            objectFit='cover'
                            w="95%" 
                            borderRadius="lg" 
                            src={mainCenter} alt="image_two" />
                    </Box>
                    <Box 
                        display='flex'
                        flexDirection='column'
                        minH='50vh'    
                        w='95%'
                    >
                        <Box>
                            <Image
                                objectFit='cover'
                                height='95%'
                                w="auto" 
                                borderRadius="lg" 
                                src={mainRightTop} alt="image_three_one" />
                        </Box>
                        <Box>
                            <Image 
                                objectFit='cover'
                                minH='24vh'
                                height='50%'
                                w="100%" 
                                borderRadius="lg" 
                                src={mainRightBottom} alt="image_three_two" />
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

