import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import StationeryBasic from '../img/Stationery_Basic.svg';
import StationeryCorporate from '../img/Stationery_Corporate.svg';
import StationeryPro from '../img/Stationery_Pro Stationery.svg';
import ai from '../img/ai.png';
import eps from '../img/eps.png';
import psd from '../img/psd.png';
import pdf from '../img/pdf.png';
import jpg from '../img/jpg.png';
import {FaCircle,FaCheck} from "react-icons/fa";

const StationaryPackage = () => {

  const datas = [
    {
      "id": 1,
      "title": "Startup",
      "price": 149,
      "discount": 199,
      "img": StationeryBasic,
      "list": {
        "li1": "2 Set of Options",
        "li2": "Business Card Design",
        "li3": "Letterhead Design",
        "li4": "Envelope Design",
        "li5": "Multiple Revisions",
      }
    },
    {
      "id": 2,
      "title": "Corporate",
      "price": 189,
      "discount": 253,
      "img": StationeryCorporate,
      "list": {
        "li1": "2 Set of Options",
        "li2": "Business Card Design",
        "li3": "Letterhead Design",
        "li4": "Envelope Design",
        "li5": "Multiple Revisions",
      }
    },
    {
      "id": 3,
      "title": "Professional",
      "price": 249,
      "discount": 333,
      "img": StationeryPro,
      "list": {
        "li1": "2 Set of Options",
        "li2": "Business Card Design",
        "li3": "Letterhead Design",
        "li4": "Envelope Design",
        "li5": "Multiple Revisions",
      }
    },
  ]

  return (
    <section id="stationary">
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
                 <li><FaCircle className='dotCircle'/> {data.list.li5}</li>
               </div>
               <div className='pakageFree'>
                 <p><span>FREE</span> Full Stationery Mockup</p>
                 <p><span>FREE</span> Ready To Print File</p>
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
                  <li><FaCheck className='fa-check'/> 48 Hrs Turnaround Time</li>
                  <li><FaCheck className='fa-check'/> 100% Satisfaction Guarantee</li>
                  <li><FaCheck className='fa-check'/> Money Back Guarantee</li>
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

export default StationaryPackage
