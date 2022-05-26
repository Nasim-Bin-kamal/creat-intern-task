import React from 'react';
import { Col, Container, Row, Button, InputGroup, FormControl, Nav } from 'react-bootstrap';
import './Footer.css';
import { FiSend } from "react-icons/fi";
import createLogo from '../../images/creat-logo.png';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer mx-auto">
            <Container >
                <Row xs={1} md={4} lg={4} className="py-5">
                    <Col >
                        <img className='mb-3' src={createLogo} alt="" width="60%" />
                        <p><small>Our main concern is to provide best packages with your budgets.</small></p>
                        <h4 className="text-white">Social Links</h4>
                        <div className="d-flex justify-content-start align-items-center my-3">
                            <FaFacebookF className='social me-3 fs-5' />
                            <FaLinkedinIn className='social me-3 fs-5' />
                            <FaTwitter className='social me-3 fs-5' />
                        </div>
                    </Col>
                    <Col >
                        <h5 className="text-white">Quick Nav</h5>
                        <Nav>
                            <ul className="quickNav ps-0">
                                <li>
                                    <Nav.Link className="menu-item" to="/home">Home</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="menu-item" to="/about">Explore</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="menu-item" to="/contact">Activity</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link className="menu-item" to="/login">Community</Nav.Link>
                                </li>

                            </ul>
                        </Nav>
                    </Col>
                    <Col>
                        <h5 className="text-white mb-3">Contact Us</h5>
                        <p>(34)2122222</p>
                        <p>Sat – Fri: 9.00 AM – 8.00 PM</p>

                        <address>
                            <i>1235 Divi St. San Francisco, </i><br />
                            <i>CA 92351</i>

                        </address>
                        <p>24 hours online service.</p>

                    </Col>
                    <Col >
                        <h5 className="text-white mb-3">Subscribe Us</h5>

                        <InputGroup className="my-4">
                            <FormControl
                                type="email"
                                placeholder="Enter your email"
                                aria-label="Enter your email"
                                aria-describedby="basic-addon2"
                            />
                            <Button className='' variant="outline-warning" id="button-addon2">
                                <FiSend className='fs-5 mx-2' />
                            </Button>
                        </InputGroup>
                        <p>Subscribe To Our Newsletter For Latest Update</p>
                    </Col>

                </Row>

            </Container>
            <div className="p-4 text-center fw-lighter footer-end" >
                <p> &copy; Copyright 2022 | All Rights Reserved By Creat LTD.</p>
            </div>
        </div>
    );
};

export default Footer;