import React from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import ContactNumber from '../img/contact-number.png';
import EmailAddress from '../img/email-address.png';
import OfficeAddress from '../img/office-address.png';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
           <div className="title">
              <h2>Get In Touch</h2>
           </div>
           <Col md={8} lg={8}>
              <div className='contactSec'>
              <Form>
                <Row>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                           <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Your email" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control type="tel" placeholder="Phone No" />
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Control as="textarea" rows={3}  placeholder="Message"/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit">Submit</Button>
               </Form>
              </div>
           </Col>
           <Col md={4} lg={4}>
             <div className="contact-details">
                <div className="contactNumber">
                   <div className='contactNumberImg'>
                      <img src={ContactNumber} alt=""/>
                   </div>
                   <div className='contactNumberDesc'>
                      <p className='contactHead'><strong>Contact Number</strong></p>
                      <p className='contactcont'>+1 (978) 791-3121</p>
                   </div>
                </div>
                <div className="contactNumber">
                   <div className='contactNumberImg'>
                      <img src={EmailAddress} alt=""/>
                   </div>
                   <div className='contactNumberDesc'>
                      <p className='contactHead'><strong>Email Address</strong></p>
                      <p className='contactcont'>info@brandsdesign.com</p>
                   </div>
                </div>
                <div className="contactNumber">
                   <div className='contactNumberImg'>
                      <img src={OfficeAddress} alt=""/>
                   </div>
                   <div className='contactNumberDesc'>
                      <p className='contactHead'><strong>USA Address</strong></p>
                      <p className='contactcont'>10685-B Hazelhurst Dr. # 21014, Houston, TX 77043, USA</p>
                   </div>
                </div>
             </div> 
           </Col> 
        </Row>
      </Container>
    </section>
  )
}

export default Contact
