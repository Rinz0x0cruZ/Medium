import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Resources/medlog.png';
import './Header.css'
const Header=()=>{
    return (
        <div className='Header'>
            <div className='Nav'>
            <Navbar >
                <Container>
                <Navbar.Brand className='logo' href="#logo">
                    <img src={logo} />
                </Navbar.Brand>
                <Nav className="me-right b">
                    <Nav.Link href="#story">Our Story</Nav.Link>
                    <Nav.Link href="#membership">Membership</Nav.Link>
                    <Nav.Link href="#write">Write</Nav.Link>
                    <Nav.Link href="#signin">Signin</Nav.Link>
                    <Nav.Link href="#start">
                        <button className='btn-dark'>Get Started</button>
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
        </div>
    );
}
export default Header;