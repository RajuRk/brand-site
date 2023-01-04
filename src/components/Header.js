import React from 'react'
import {Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import  LogoImg from '../img/rankuhigher-logo.png';
import {FaEnvelope,FaPhoneAlt} from "react-icons/fa";

const Header = () => {
  return (
    <section id="header">
      <header>
        <Container>
          <Row className='headerRow'>
            <Col md={3} lg={3} className="logoCol">
              <div className="logoSec">
                <img src={LogoImg} alt=""/>
              </div>
            </Col>
            <Col md={9} lg={9} className="navtop">
              <div className='navSec'>
                <div className="navTop">
                   <p><FaEnvelope className='fa-icons'/> response@rankuhigher.in</p>
                   <p><FaPhoneAlt className='fa-icons'/> +91 95853 80011</p>
                </div>
                <div className='navMenu'>
                  <ul>
                    <li><Link>About Us</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Portfolio</Link></li>
                    <li><Link>Testimonials</Link></li>
                    <li><Link>Client Success Story</Link></li>
                    <li><Link>Contact Us</Link></li>
                  </ul>
                </div>
              </div>  
            </Col>  
          </Row> 
        </Container>
      </header>
      <div className='mobile-Section'>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <div className="logoSec">
                <img src={LogoImg} alt=""/>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">About Us</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Testimonials</Nav.Link>
                <Nav.Link href="#link">Client Success Story</Nav.Link>
                <Nav.Link href="#link">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </section>
  )
}

export default Header
