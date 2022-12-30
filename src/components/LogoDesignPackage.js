import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import LogoRevamp from '../img/Logo_Revamp.svg'
import LogoDesign from '../img/logo-design.png';
import PrintDesign from '../img/print-design.png'; 
import ai from '../img/ai.png';
import eps from '../img/eps.png';
import psd from '../img/psd.png';
import pdf from '../img/pdf.png';
import jpg from '../img/jpg.png';
import png from '../img/png.png';
import {FaCircle,FaCheck} from "react-icons/fa";

const LogoDesignPackage = () => {

  const datas = [
    {
        "id": 1,
        "title": "Logo Startup",
        "img": LogoRevamp,
        "price": 189,
        "discount": 219,
        "list": {
            "liOne": "3 Logo Concepts",
            "liTwo": "250 Business Cards",
            "liThree": "Grayscale Version",
            "liFour": "Unlimited Revision",
        },
    },
    {
        "id": 2,
        "title": "Logo & Identity",
        "img": LogoDesign,
        "price": 219,
        "discount": 244,
        "list": {
            "liOne": "4 Logo Concepts",
            "liTwo": "500 Business Cards",
            "liThree": "Grayscale Version",
            "liFour": "Unlimited Revision",
        },
    },
    {
        "id": 3,
        "title": "Identity & Social Media Kit",
        "img": PrintDesign,
        "price": 319,
        "discount": 355,
        "list": {
            "liOne": "5 Logo Concepts",
            "liTwo": "1000 Business Cards",
            "liThree": "Grayscale Version",
            "liFour": "Unlimited Revision",
        },
    }
  ]


  return (
    <section id="logoDesign">
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
                 <li><FaCircle className='dotCircle'/> {data.list.liOne}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.liTwo}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.liThree}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.liFour}</li>
                 
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
                    <li><img src={png} alt=""/></li>
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

export default LogoDesignPackage
