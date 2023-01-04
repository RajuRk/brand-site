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
        <div className='box' style={{backgroundColor: "#7ab53c"}}>
           <div className="imfWithContent">
              <img src={MoneyBack} alt=""/>
              <p>100% Result Oriented Services</p>
           </div>  
        </div>
        <div className='box' style={{backgroundColor: "#ff7a0e"}}>
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
        <div className='box' style={{backgroundColor: "#0084db"}}>
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
                   <p style={{textAlign: "justify"}}>Are you aiming to expand your small business through more sales and customers' base? Then you need to increase your digital exposure. All of the leading businesses in all type industries made their entry to e-business. So this is the time to change.  But how ?  Don't worry, we will assist you. The only way to capture customers' attention in a world where users are bombarded with digital ads, is speaking to them in a way that feels authentically one-on-one. In this you need to perform two tasks. Firstly, knowing the audience's time of presence on such platforms. Secondly, connecting with them through matching,catching content and making that to reach the perfect audience. Variety of tools exist such as SEO, Web Design, Content marketing, Social Media Marketing , Email Marketing and more for performing these two tasks to support your e-business. We RYH- (Rank You Higher) are here to perform those two tasks and more than that to make your business successful. As our name insists we give more effort to Rank You Higher and being the most successful Result-oriented Digital Marketing Agency . We're glad you're here! Now let's make it happen.</p>
                </div>
             </div>
           </Row>
        </Container>
      </div>
    </section>
  )
}

export default About
