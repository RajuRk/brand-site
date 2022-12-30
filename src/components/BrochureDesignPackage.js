import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import BrochureBiFold from '../img/Brochure_Bi-Fold.svg';
import BrochureTriFold from '../img/Brochure_Tri-Fold.svg';
import BrochureCustomDiecut from '../img/Brochure_Custom+Die-cut.svg';
import ai from '../img/ai.png';
import eps from '../img/eps.png';
import psd from '../img/psd.png';
import pdf from '../img/pdf.png';
import jpg from '../img/jpg.png';
import {FaCircle,FaCheck} from "react-icons/fa";

const BrochureDesignPackage = () => {

  const datas = [
    {
      "id": 1,
      "title": "Bi-Fold",
      "price": "199",
      "discount": "249",
      "img": BrochureBiFold,
      "list": {
        "li1": "2 Creative Brochure Designs",
        "li2": "From 2 Creative Designers",
        "li3": "Multiple Revisions",
        "li4": "Step-by-step support",
      }
    },
    {
      "id": 2,
      "title": "Tri-Fold",
      "price": "299",
      "discount": "374",
      "img": BrochureTriFold,
      "list": {
        "li1": "2 Creative Brochure Designs",
        "li2": "From 2 Creative Designers",
        "li3": "Multiple Revisions",
        "li4": "Step-by-step support",
      }
    },
    {
      "id": 3,
      "title": "Custom Die-Cut",
      "price": "499",
      "discount": "624",
      "img": BrochureCustomDiecut,
      "list": {
        "li1": "2 Creative Brochure Designs",
        "li2": "From 2 Creative Designers",
        "li3": "Multiple Revisions",
        "li4": "Step-by-step support",
      }
    },
  ]

  return (
    <section id="Brochure">
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

export default BrochureDesignPackage
