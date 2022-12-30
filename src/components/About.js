import React from 'react'
import {Container, Row} from 'react-bootstrap';
import MoneyBack from '../img/money-back.svg';
import Satisfaction from '../img/satisfaction.svg';
import CustomDesign from '../img/custom-design.svg';
import CustomerSupport from '../img/customer-support.svg';
import AwardWinning from '../img/award-winning.png';

const About = () => {
  return (
    <section id="about">
      <div className='aboutBoxes'>
        <div className='box' style={{backgroundColor: "#7bb242"}}>
           <div className="imfWithContent">
              <img src={MoneyBack} alt=""/>
              <p>100% Money-back Guarantee</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#f48a1f"}}>
           <div className="imfWithContent">
              <img src={Satisfaction} alt=""/>
              <p>100% Satisfaction Guarantee</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#e63b34"}}>
           <div className="imfWithContent">
              <img src={CustomDesign} alt=""/>
              <p>100% Custom Design</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#2f83d1"}}>
           <div className="imfWithContent">
              <img src={CustomerSupport} alt=""/>
              <p>24/7 Customer Support</p>
           </div>  
        </div>
      </div>
      <div className='aboutMain'>
        <Container>
           <Row>
             <div className='aboutSec'>
                <div className='aboutImg'>
                    <img src={AwardWinning} alt="" className='mb-3'/>
                </div>
                <div className="aboutContent">
                   <h2>Custom Logo Design Agency</h2>
                   <p>Brands Design is a leading branding agency specializing in custom logo designs and crafting aesthetic brand identities. We aim at providing our clients with professional yet niche related branding services targeted at turning their audiences into clients. Read More</p>
                </div>
             </div>
           </Row>
        </Container>
      </div>
    </section>
  )
}

export default About
