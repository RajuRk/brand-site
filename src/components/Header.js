import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LogoImg from '../img/logo.png';
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
            <Col md={9} lg={9}>
              <div className='navSec'>
                <div className="navTop">
                   <p><FaEnvelope className='fa-icons'/> xyz@rankuhigher.in</p>
                   <p><FaPhoneAlt className='fa-icons'/> +91 (999)-999-9999</p>
                </div>
                <div className='navMenu'>
                  <ul>
                    <li><Link>About Us</Link></li>
                    <li><Link>Services</Link></li>
                    <li><Link>Portfolio</Link></li>
                    <li><Link>Pricing</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact Us</Link></li>
                  </ul>
                </div>
              </div>  
            </Col>  
          </Row> 
        </Container>
      </header>
    </section>
  )
}

export default Header
