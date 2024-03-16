import React from 'react'
import { NavbarText } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Redux Toolkit with Stripe</Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                    <Nav.Link to="/" as={Link}>Cart</Nav.Link>


                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <NavbarText>
                        <Nav.Link to="/cart" as={Link}>My Bag 0</Nav.Link>
                    </NavbarText>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavigationBar


