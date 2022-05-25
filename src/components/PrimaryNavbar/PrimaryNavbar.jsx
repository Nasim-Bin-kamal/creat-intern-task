import React from 'react';
import { Container, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/creat-logo.png';
import { MdOutlineDarkMode } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import { BsSquareFill } from "react-icons/bs";

const menus = [
    {
        title: "Home"
    },
    {
        title: "Explore"
    },
    {
        title: "Activity"
    },
    {
        title: "Community"
    },
    {
        title: "Pages"
    },
    {
        title: "Contact"
    }
];
const PrimaryNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" width="90%" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {
                                menus?.map((menu, m_id) => (
                                    <NavDropdown className='me-2' title={menu?.title} key={m_id}>
                                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                    </NavDropdown>
                                ))
                            }
                            <Button className='px-4 text-white rounded-pill' variant='outline-primary'>
                                <AiFillWallet className='mb-1 me-2' /> Wallet Connect
                            </Button>
                        </Nav>
                        <Nav>
                            <Button className='mx-1' variant='secondary' size='sm' >
                                <BsSquareFill className='fs-5' />
                            </Button>
                            <Button className='mx-1' variant='secondary' size='sm'>
                                <MdOutlineDarkMode className='fs-5' />
                            </Button>
                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default PrimaryNavbar; 