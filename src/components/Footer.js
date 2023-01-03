import React, {useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import  LogoImg from '../img/rankuhigher-logo.png';
import {FaFacebookF, FaTwitter, FaInstagramSquare, FaLinkedinIn} from "react-icons/fa";
import {FaCheck} from "react-icons/fa";

const Footer = () => {
  
  const date = new Date(); 
  
  const [year, setYear] = useState(date.getFullYear())
  console.log(setYear);
  return (
    <section id="footer">
       <Container>
        <Row className='footerRow'>
         <Col md={4} lg={4} className="mb-4">
            <div className="footer-brand">
               <div className='footer-title'>
                  <h4>About Us</h4>
               </div>
               <div className='footer-logo'>
                  <img src={LogoImg} alt="" style={{marginBottom: '15px'}}/>
               </div>
               <div className="footer-content">
                  <p style={{color: "#fff"}}>Brands Design is a leading branding agency specializing in custom logo designs and crafting aesthetic brand identities. We aim at providing our clients with professional yet niche related branding services targeted at turning their audiences into clients. </p>
               </div>
               <ul>
                <li><FaFacebookF/></li>
                <li><FaTwitter/></li>
                <li><FaInstagramSquare/></li>
                <li><FaLinkedinIn/></li>
               </ul>
            </div>
         </Col>
         <Col md={3} lg={3} className="mb-4">
            <div className='footer-quicks'>
                <div className='footer-title'>
                  <h4>Quick Links</h4>
                </div>
                <div className='links'>
                    <ul>
                        <li><FaCheck/> &nbsp;About Us</li>
                        <li><FaCheck/> &nbsp;Services</li>
                        <li><FaCheck/> &nbsp;Portfolio</li>
                        <li><FaCheck/> &nbsp;Client Story</li>
                        <li><FaCheck/> &nbsp;Terms and Conditions</li>
                        <li><FaCheck/> &nbsp;Privacy Policy</li>
                        <li><FaCheck/> &nbsp;FAQ</li>
                        <li><FaCheck/> &nbsp;Contact</li>
                    </ul>
                </div>
            </div>
         </Col>
         <Col md={5} lg={5} className="mb-4">
           <div className='footer-location'>
              <div className='footer-title'>
                <h4>Location</h4>
              </div>
              <div className='footer-map'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15669.559758056352!2d76.97489721265869!3d10.933888627434179!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x89ce6256b5a064ad!2sRank%20You%20Higher!5e0!3m2!1sen!2sin!4v1672390092455!5m2!1sen!2sin" title="Rankuhigher" style={{width: "100%", height: "250px", border: "0", borderRadius:"20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
           </div>
         </Col> 
        </Row>
        <Row>
            <div className='copyrights'>
                <p>&copy; {year} All rights Reserved. Rankuhigher</p>
            </div>
        </Row>
       </Container>
    </section>
  )
}

export default Footer
