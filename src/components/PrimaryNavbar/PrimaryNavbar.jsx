import React, { useState } from 'react';
import { Container, Button, Nav, Navbar, NavDropdown, Form, FormControl } from 'react-bootstrap';
import './PrimaryNavbar.css';
import logo from '../../images/creat-logo.png';
import { MdOutlineDarkMode } from "react-icons/md";
import { AiFillWallet } from "react-icons/ai";
import { BsSquareFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

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
    const [toggle, setToggle] = useState(true);
    return (
        <Navbar className='nav-bar' bg="dark" expand="lg" variant='dark' sticky='top'>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="" width="80%" />
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


                    </Nav>
                    <Nav>
                        <Form className="d-flex mx-2">
                            {
                                toggle && (
                                    <FormControl
                                        size='sm'
                                        type="search"
                                        placeholder="Search"
                                        className=" search-input bg-transparent text-white"
                                        aria-label="Search"


                                    />
                                )
                            }
                            <Button onClick={() => setToggle(!toggle)} className='border border-0 btn-search' variant="outline-light">
                                <BiSearch className='fs-5' />
                            </Button>
                        </Form>
                        <div>
                            <Button className='mx-3 px-4 text-white rounded-pill' variant='outline-primary'>
                                <AiFillWallet className='mb-1 me-2' /> Wallet Connect
                            </Button>
                        </div>
                    </Nav>

                    <Nav>

                        <div className='d-flex mx-2'>
                            <Button className='mx-1 rounded-3 p-1 bg-secondary opacity-75' variant='secondary' size='sm' >
                                <BsSquareFill className='fs-5' />
                            </Button>
                            <Button className='mx-1 btnMode rounded-3 p-1 bg-secondary opacity-75' variant='secondary' size='sm'>
                                <MdOutlineDarkMode className='fs-5' />
                            </Button>
                        </div>
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default PrimaryNavbar; 