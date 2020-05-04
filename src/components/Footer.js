import React from 'react';
import {
    Container, 
    Row, 
    Col
} from 'react-bootstrap';

function Footer() {
    return(
        <footer className='mt-5'>
            <Container fluid>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm={12}>George Zeng</Col>
                    <Col className='p-0 justify-content-end' md={4}>I made this website in a week.</Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;