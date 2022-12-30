import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import BusinessCardPersonal from '../img/Business+Card_Personal.svg'
import BusinessCardStartup from '../img/Business+Card_Startup.svg'
import BusinessCardBigTeam from '../img/Business+Card_Big+Team.svg'
import ai from '../img/ai.png';
import eps from '../img/eps.png';
import psd from '../img/psd.png';
import pdf from '../img/pdf.png';
import jpg from '../img/jpg.png';
import {FaCircle,FaCheck} from "react-icons/fa";

const BusinessCardDesignPackage = () => {

  const datas = [
    {
      "id": 1,
      "title": "Design Only",
      "price": 69,
      "discount": 93,
      "img": BusinessCardPersonal,
      "list": {
        "li1": "3 Design Options",
        "li2": "Multiple Revisions",
        "li3": "Designed for 1 Person",
      } 
    },
    {
      "id": 2,
      "title": "Design + Print",
      "price": 249,
      "discount": 333,
      "img": BusinessCardStartup,
      "list": {
        "li1": "3 Design Options",
        "li2": "Multiple Revisions",
        "li3": "1000 Cards Print",
        "li4": "Worldwide Delivery",
        "li5": "Free Delivery in US"
      } 
    },
    {
      "id": 3,
      "title": "Design + Print Pro",
      "price": 649,
      "discount": 866,
      "img": BusinessCardBigTeam,
      "list": {
        "li1": "3 Design Options",
        "li2": "Multiple Revisions",
        "li3": "5 Team Members",
        "li4": "1000 cards each member",
        "li5": "Worldwide Delivery",
        "li6": "Free Delivery in US",
      } 
    }
  ];

  return (
    <section id="businessCard">
      <Container>
        <Row>
        {
            datas.map((data) => (
                <Col md={4} lg={4} key={data.id}>
            <div className='pakageBox'>
               <div className='pakageList'>
                  <div className="titlePrice">
                     <h3>{data.title}</h3>
                     <p><span>$</span>{data.price}<span className='discounted'>${data.discount}</span></p>
                  </div>
                  <div className='pakageImg'>
                    <img src={data.img} alt=""/>
                   </div>
               </div>
               <div className='pakagePoints'>
                 <li><FaCircle className='dotCircle'/> {data.list.li1}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li2}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li3}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li4}</li>
               </div>
               <div className='pakageFree'>
                 <p><span>FREE</span> Logo Mockup</p>
                 <p><span>FREE</span> Business Cards Mockup</p>
                 <p><span>FREE</span> Web Icon (Favicon)</p>
                 <p><span>FREE</span> Live Support 24/7</p>
                 <p><span>FREE</span> Final Formats:</p>
                 <ul>
                    <li><img src={ai} alt=""/></li>
                    <li><img src={eps} alt=""/></li>
                    <li><img src={psd} alt=""/></li>
                    <li><img src={pdf} alt=""/></li>
                    <li><img src={jpg} alt=""/></li>
                 </ul>
               </div>
               <div className='moreFeature'>
                  <h4>MORE FEATURES</h4>
                  <li><FaCheck className='fa-check'/> 24 Hrs Turnaround Time</li>
                  <li><FaCheck className='fa-check'/> Money Back Guarantee</li>
                  <li><FaCheck className='fa-check'/> 100% Satisfaction Guarantee</li>
                  <li><FaCheck className='fa-check'/> 100% Ownership Rights</li> 
               </div>
               <div className='orderNow'>
                  <button>Order Now</button>
               </div>
            </div>
          </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

export default BusinessCardDesignPackage
