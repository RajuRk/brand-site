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
              <p>100% Result Oriented Services</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#f48a1f"}}>
           <div className="imfWithContent">
              <img src={Satisfaction} alt=""/>
              <p>100% Creative Digital Solutions</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#e63b34"}}>
           <div className="imfWithContent">
              <img src={CustomDesign} alt=""/>
              <p>100% Customized Designs</p>
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
                   <h2>The Best Digital Marketing Company in Coimbatore</h2>
                   <h5 style={{marginBottom: "30px"}}>Target the right customers with relevant, personalized ads no matter where they are across the web. </h5>
                   <p style={{textAlign: "justify"}}>Are you looking to grow your small business by getting more sales and customers online? Did you know that over 90% of local transactions start from a digital search or experience? This means that if you own a small local business, then you need to increase your digital exposure using a variety of methods: SEO, Web Design, Content marketing, Social Media Marketing , Email Marketing  and more. In a world where users are bombarded with digital ads, the only way to capture their attention is speaking to them in a way that feels authentically one-on-one. Doing so requires a knowing when your audience is on any given platform, then delivering relevant content that matches where they are on the customer journey.  That's what, We (Rank You Higher) exactly do. RYH offers a proven workflow techniques and test packages that best utilize digital marketing capabilities, making us the most successful Result-oriented Digital Marketing Agency in Coimbatore. Whether you found us by searching “digital marketing agency near me” or you stumbled upon our site by simply looking for the best digital marketing agency on Earth, we're glad you're here! Now let's make it happen.

</p>
                </div>
             </div>
           </Row>
        </Container>
      </div>
    </section>
  )
}

export default About
