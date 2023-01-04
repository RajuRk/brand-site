import React, {useState} from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import "yup-phone";
import { yupResolver } from '@hookform/resolvers/yup';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import axios from 'axios';
import ContactNumber from '../img/contact-number.png';
import EmailAddress from '../img/email-address.png';
import OfficeAddress from '../img/office-address.png';

let schema = yup.object().shape({
   name: yup.string("Enter a valid name")
         .required("Name is required")
         .min(3,"minimum 3 characters")
         .max(15, "maximum 15 Characters"),
   email: yup.string()
          .email()
          .required("Email is required"),
   phone: yup.string()
          .required("Phone number is required")
          .phone("Phone must be a valid phone number"),
   subject: yup.string()
            .required(),
   message: yup.string()
            .required()
            .min(15, "Minimum 15 characters required")
            .max(240, "Maximum 240 characters allowed"),
})

const Contact = () => {
  
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [phone, setPhone] = useState('');
 const [subject, setSubject] = useState('');
 const [message, setMessage] = useState('');

 const { register, handleSubmit, formState: { errors}} = useForm({
   resolver: yupResolver(schema),
   mode: "onChange"
  })

  const handleData = () => {
   //  e.preventDefault();
    console.log(name,email, phone, subject, message);
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Subject: subject,
      Message: message
    }

    axios.post('https://sheet.best/api/sheets/09b003c1-7877-4626-a305-6da41ba8ee9b', data)
         .then((response) => {
            console.log(response);
            setName('');
            setEmail('');
            setPhone('');
            setSubject('');
            setMessage('');
         })  
  }

  return (
    <section id="contact">
      <Container>
        <Row>
           <div className="title">
              <h2>Get In Touch</h2>
           </div>
           <Col md={8} lg={8}>
              <div className='contactSec'>
              <Form onSubmit={handleSubmit(handleData)}>
                <Row>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                           <Form.Control 
                              {...register('name')} 
                              type="text"
                              placeholder="Your Name" 
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              />
                           <p className='error-msg'>{errors.name?.message}</p>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control 
                              {...register('email')} 
                              type="text" 
                              placeholder="Your email" 
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              />
                            <p className='error-msg'>{errors.email?.message}</p>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control 
                              {...register('phone')} 
                              type="text" 
                              placeholder="Phone No" 
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              />
                            <p className='error-msg'>{errors.phone?.message}</p>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={6}>
                        <Form.Group className="mb-3" controlId="formBasicSubject">
                            <Form.Control 
                              {...register('subject')} 
                              type="text" 
                              placeholder="Subject" 
                              value={subject}
                              onChange={(e) => setSubject(e.target.value)}
                              />
                            <p className='error-msg'>{errors.subject?.message}</p>
                        </Form.Group>
                    </Col>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Control 
                          {...register('message')} 
                          as="textarea" 
                          rows={3}  
                          placeholder="Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          />
                        <p className='error-msg'>{errors.message?.message}</p>
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
                      <p className='contactcont'>+91 (958) 538-0011</p>
                   </div>
                </div>
                <div className="contactNumber">
                   <div className='contactNumberImg'>
                      <img src={EmailAddress} alt=""/>
                   </div>
                   <div className='contactNumberDesc'>
                      <p className='contactHead'><strong>Email Address</strong></p>
                      <p className='contactcont'> response@rankuhigher.in</p>
                   </div>
                </div>
                <div className="contactNumber">
                   <div className='contactNumberImg'>
                      <img src={OfficeAddress} alt=""/>
                   </div>
                   <div className='contactNumberDesc'>
                      <p className='contactHead'><strong>Address</strong></p>
                      <p className='contactcont'>Rathinam Techzone Campus, Pollachi Main Rd, Eachanari, Tamil Nadu 641021</p>
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
