import { Box, Button, Modal, ModalOverlay, ModalContent, useDisclosure, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import React from 'react'


export default function Navbar() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.100'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )
    const OverlayTwo = () => (
        <ModalOverlay
            bg='blackAlpha.100'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("white", "gray.700")


    return (
        <>
            <header>
                <Box 
                    className="navbar"
                    display='flex'
                    flexDirection='row'
                    >
                    <Box className="logo">
                        <h1>Untied Shoes</h1>
                    </Box>
                    <Box 
                        className="nav-links"
                        alignItems='center'
                        >
                        <li>
                            <NavLink to="home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="men">Men</NavLink>
                        </li>
                        <li>
                            <NavLink to="women">Women</NavLink>
                        </li>
                        <li>
                            <NavLink to="categories">Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to="sale">Sale</NavLink>
                        </li>
                    </Box>
                    <Box 
                        className="nav-functions"
                        alignItems='center'
                        >
                        <Box>
                            <Button borderRadius='25px' colorScheme='gray'>
                            <NavLink to="search">Search</NavLink>
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                borderRadius='25px'
                                colorScheme='yellow'
                                onClick={() => {
                                setOverlay(<OverlayOne />)
                                onOpen()
                                }}
                            >
                                Login
                            </Button>
                            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                                {overlay}
                                <ModalContent>
                                    <Flex alignItems="center" justifyContent="center">
                                        <Flex direction="column" background={formBackground} p={12} rounded={6}>
                                            <Heading mb={6}>Log in</Heading>
                                            <Input placeholder="Please enter email" variant="filled" mb={3} type="email" />
                                            <Input placeholder="*******" variant="filled" mb={6} type="password" />
                                            <Button colorScheme="yellow" mb={6}>Log in</Button>
                                            <Button onClick={toggleColorMode} >Toggle Color Mode</Button>
                                        </Flex>
                                    </Flex>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Box>
                </Box>
            </header>
        </>
    )
}