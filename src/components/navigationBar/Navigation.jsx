import React from 'react';
import './Navigation.css';

// importing react bootstrap components 
import {Navbar, Nav, Container} from 'react-bootstrap';

function Navigation(){
    return(
        <div className='nav-parent'>
        <div className="navigation shadow">
           <Navbar expand="lg" collapseOnSelect>
            <Container>
            <Navbar.Brand href="#home">Rikshith Bommena</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#education">Education</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
           </Navbar>
        </div>        
        </div>
    )
}

export default Navigation;
