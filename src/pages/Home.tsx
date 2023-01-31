import { Box, Button, Container, Grid, Image, useColorMode, useColorModeValue, Textarea, VStack } from "@chakra-ui/react";
import NavLink from "react-router-dom";
import topMain from "../assets/main4.jpg";
import mainLeft from "../assets/narrow2.jpg";
import mainCenter from "../assets/narrow4.jpg";
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
                            <Button as='a'
                                colorScheme='yellow' 
                                marginInline={10} 
                                borderRadius='50px'
                                height='60px'
                                width='150px'
                                >
                                Shop men's
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
            

            {/* second section with large fonts */}
            <Box 
                minH='55vh'
                width='100%'
                backgroundColor='whiteAlpha'
                display='flex'
                flexDirection='row'
                mb='3'
            >
                <Box>
                    <Textarea 
                        writing-mode='vertical-lr' 
                        textTransform='uppercase' 
                        transform='rotate(-90deg)'
                        fontWeight='semibold'
                        ms='-5'
                        mt='20'
                        letterSpacing='2px'
                        border='none'
                        >
                            Activities
                        </Textarea>
                </Box>
                <Box 
                    className='activitiesText'
                    minH='55vh'
                    width='auto'
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
                            minH='45vh'
                            objectFit='cover'
                            maxW='90%'
                            minW='300px'
                            // height='40vh'
                            boxSize='md'
                            mt='10%'
                            borderRadius='25px'
                            src={activitiesPic} alt='activitiesPicture'
                        />
                    </Container>
                </Box>
            </Box>

             {/* middle three box section  */}
            <Box 
                className="threeBoxes"
                minH='55vh'
                maxH='70vh'
                width='100%'
                // height='auto'
                bgColor='whiteAlpha'
                overflow='auto'
                ms='2'
                >
                <Grid templateColumns="repeat(3, 1fr)">
                    <Box display='flex' flexDirection='column' position='relative'>
                        <Box>
                            <Image 
                                position='absolute'
                                minH='50vh'
                                minW='300px'
                                objectFit='cover'
                                w="95%" 
                                borderRadius="lg" 
                                src={mainLeft} alt="image_one" />
                        </Box>
                        <Box 
                            position='absolute'
                            color="whiteAlpha.900" 
                            fontSize='2xl' 
                            fontWeight='semibold'
                            mt='115%'
                            ms='7'
                            >
                            <p>Performance Running
                            </p>
                            <Box>
                                <Button 
                                    mt='5'
                                    colorScheme='yellow' 
                                    borderRadius='50px'
                                    height='45px'
                                    width='100px'
                                    me='3'
                                    >Men's
                                </Button>
                                <Button 
                                mt='5'
                                    colorScheme='yellow'
                                    borderRadius='50px'
                                    height='45px'
                                    width='100px'
                                    >Women's
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box display='flex' flexDirection='column' position='relative'>
                        <Box>
                            <Image 
                                position='relative'
                                minH='50vh'
                                minW='300px'
                                objectFit='cover'
                                w="95%" 
                                borderRadius="lg" 
                                src={mainCenter} alt="image_two" />
                        </Box>
                        <Box 
                            position='absolute'
                            color="whiteAlpha.900" 
                            fontSize='2xl' 
                            fontWeight='semibold'
                            mt='115%'
                            ms='7'
                            >
                            <p>Road Running
                            </p>
                            <Box>
                                <Button 
                                    mt='5'
                                    colorScheme='yellow' 
                                    borderRadius='50px'
                                    height='45px'
                                    width='100px'
                                    me='3'
                                    >Shop now
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display='flex' 
                        flexDirection='column'
                        position='relative'
                        minH='50vh'    
                        w='95%'
                        gap='5'
                        me='3'
                        >
                        <Box h='50%'>
                            <Image
                                position='relative'
                                objectFit='cover'
                                minH='24vh'
                                height='100%'
                                minW='300px'
                                w="100%" 
                                borderRadius="lg" 
                                src={mainRightTop} alt="image_three_one" />
                        </Box>
                        <Box h='50%'>
                            <Image 
                                position='relative'
                                objectFit='cover'  
                                objectPosition='right'
                                minH='24vh'
                                height='100%'
                                minW='300px'
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

