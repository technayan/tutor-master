import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <Navbar expand="lg py-4">
            <Container>
                <Navbar.Brand href="#home" className='logo text-white'>Tutor Master <span className='slogan'>Knowledge Transfer</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='nav-link active text-white me-5 px-0'>Home</Nav.Link>
                    <Nav.Link href="#link" className='nav-link text-white me-5 px-0'>Trainings</Nav.Link>
                    <Nav.Link href="#link" className='nav-link text-white me-5 px-0'>About</Nav.Link>
                    <Nav.Link href="#link" className='nav-link action-btn px-4'>Login</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;