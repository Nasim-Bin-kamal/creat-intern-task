import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './SecondaryNavbar.css';

const menus = [
    {
        title: "Category1"
    },
    {
        title: "Category2"
    },
    {
        title: "Category3"
    },
    {
        title: "Category4"
    },
    {
        title: "Category5"
    },
    {
        title: "Category6"
    },
    {
        title: "Category7"
    },
    {
        title: "Category8"
    },
    {
        title: "Category9"
    },
    {
        title: "Category10"
    },
]

const SecondaryNavbar = () => {
    return (

        <Navbar className='secondNav' bg="dark" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand className='text-white fs-3' href="#home">Categories</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ">
                        {
                            menus?.map((menu, m_id) => (<Nav.Link key={m_id} className="me-2" href="#">{menu?.title}</Nav.Link>))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default SecondaryNavbar;