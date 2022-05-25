
import React from 'react';
import { Breadcrumb, Col, Form, Row, Button, Container } from 'react-bootstrap';
import feedbackImage from '../../images/action-figure.png';
import './FeedbackForm.css';

const FeedbackForm = () => {
    return (
        <div>

            <div className="d-flex justify-content-center align-items-center flex-column contactBanner">
                <h2 className='py-2 text-white'>Feedback</h2>
                <Breadcrumb >
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#" >Pages</Breadcrumb.Item>
                    <Breadcrumb.Item href="#"></Breadcrumb.Item>

                </Breadcrumb>
            </div>
            <div className='mx-auto formSection'>
                <Container>
                    <Row className='mx-auto py-5 d-flex justify-content-center align-items-center'>
                        <Col xs={12} md={6} lg={6}>
                            <img className='img-fluid' src={feedbackImage} alt="" width="90%" />
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <div className='mx-auto pb-3'>
                                <h2 className='text-white'>Share Your Feedback</h2>
                                <p className='text-white-50'>We would love to hear your thoughts or feedback on how we can improve your experience using Creat!</p>
                            </div>
                            <Form>
                                <Form.Group className="mb-3 ">
                                    <Form.Control className='bg-transparent border-secondary text-white' type="text" placeholder="Your Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control className='bg-transparent border-secondary text-white' type="email" placeholder="Your Email Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control className='bg-transparent border-secondary text-white' type="text" placeholder="Select Subject" />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control
                                        className='bg-transparent border-secondary text-white'
                                        as="textarea"
                                        placeholder="Feedback"
                                        rows={3}

                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Control
                                        className='bg-transparent border-secondary text-white'
                                        as="textarea"
                                        placeholder="If available. Please include the Creat url that demostrats the comment or bug you are reporting"
                                        rows={3}


                                    />
                                </Form.Group>

                                <Button className='w-100 rounded-pill fw-bold' variant="outline-light" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FeedbackForm;