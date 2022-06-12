import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link } from "react-router-dom";
const Header = () => {
    return (
        <div >
            <Navbar sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href='/#services'>Services</Nav.Link>
                        <Nav.Link as={Link} to="about">About me</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;