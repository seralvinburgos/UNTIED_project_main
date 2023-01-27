import { Box, Container, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalFooter, useDisclosure, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
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
        <div className="root-layout">
            <header>
                <nav className="navbar" >
                    <div className="logo">
                        <h1>Untied Shoes</h1>
                    </div>
                    <ul className="nav-links">
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
                    </ul>
                    <ul className="nav-functions">
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
                    </ul>
                </nav>
            </header>
            <Box marginTop={5}>
            <main>
                <Outlet />
            </main>
            </Box>
        </div>
    )
}