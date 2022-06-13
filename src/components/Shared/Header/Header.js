import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useFirebase from '../../../hooks/useFirebase';
import logo1 from '../../../images/logo1.png';
const Header = () => {
    const { user,handleSignOut } = useFirebase();
    return (
        <div >
            <Navbar sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={'35px'} src={logo1} alt="" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"></Nav.Link>
                        <Nav.Link href='/#services'>Services</Nav.Link>
                        <Nav.Link as={Link} to="about">About me</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                    </Nav>
                     <span className='text-white mx-4'>{user?.displayName && user.displayName}</span>
                    <Nav>
                        
                        {
                            user?.uid ?
                                <button onClick={handleSignOut} className='btn btn-primary'>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">Login</Nav.Link>

                        }
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="register">Register</Nav.Link>
                    </Nav>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;