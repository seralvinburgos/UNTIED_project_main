import { Container } from '@chakra-ui/react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RootLayout() {
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
                        <li>
                            <NavLink to="search">Search</NavLink>
                        </li>
                        <li>
                            <NavLink to="Login">Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Container maxW="container.lg" marginTop={5}>
            <main>
                <Outlet />
            </main>
            </Container>
        </div>
    )
}