import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Resources/medlog.svg';
import './Navbar.css'

const NavBar=()=>{
    const [pos,setPos]=useState(false);
    const [btn,setBtn]=useState(false);
    useEffect(()=>{
      const handleScroll=()=>{
        if(window.scrollY>525){ 
          setPos(true)
          setBtn(true)
        }
        else{ 
          setPos(false)
          setBtn(false)
        }
      }
      window.addEventListener('scroll',handleScroll);
      return ()=>window.removeEventListener('scroll',handleScroll);
    },[])

    const class_name = pos ? 'Nav white' : 'Nav';
    const btn_name = btn ? 'btn-dark green' : 'btn-dark';
    return(
        <Navbar className={class_name} sticky='top'>
          <Container>
            <Navbar.Brand className='logo' href="#logo">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Nav className="me-right pad">
              <Nav.Link href="#story">Our Story</Nav.Link>
              <Nav.Link href="#membership">Membership</Nav.Link>
              <Nav.Link href="#write">Write</Nav.Link>
              <Nav.Link href="#signin">Sign In</Nav.Link>
              <Nav.Link href="#start">
                <button className={btn_name}>Get Started</button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
}
export default NavBar;