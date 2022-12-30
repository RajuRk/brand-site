import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import psd from '../img/psd.png';
import html from '../img/html.png';
import css from '../img/css.png';
import cms from '../img/cms.png';
import StandardWebsite from '../img/standard-website.png';
import BusinessWebsite from '../img/business-website.png';
import ProWebsite from '../img/pro-website.png';
import {FaCircle,FaCheck} from "react-icons/fa";

const WebDesignPackage = () => {
  
  const datas= [
    {
      "id": 1,
      "title": "Informative Site",
      "price": "1199",
      "discounted": "1509",
      "list": {
        "list1": "Custom Designs & Layout",
        "list2": "Domain (1) & Hosting Included",
        "list3": "Admin Dashboard",
        "list4": "Image Gallery",
        "list5": "Appointment Feature",
        "list6": "Products or Services Listing",
        "list7": "Products or Services Details Page",
        "list8": "Blog",
        "list9": "Our Team",
        "list10": "Contact Form",
        "list11": "Testimonials",
        "list12": "SEO Optimized",
        "list13": "Cross Platform compatible",
        "list14": "Cross Browser compatible",
      },
      "img": StandardWebsite
    },
    {
      "id": 2,
      "title": "Shopify",
      "price": "1499",
      "discounted": "1999",
      "list": {
        "list1": "Custom Designs & Layout",
        "list2": "Domain (1) & Hosting Included",
        "list3": "Admin Dashboard",
        "list4": "Image Gallery",
        "list5": "Appointment Feature",
        "list6": "Products or Services Listing",
        "list7": "Products or Services Details Page",
        "list8": "Blog",
        "list9": "Our Team",
        "list10": "Contact Form",
        "list11": "Testimonials",
        "list12": "SEO Optimized",
        "list13": "Cross Platform compatible",
        "list14": "Cross Browser compatible",
      },
      "img": BusinessWebsite
    },
    {
      "id": 3,
      "title": "Ecommerce",
      "price": "2249",
      "discounted": "2999",
      "list": {
        "list1": "Custom Designs & Layout",
        "list2": "Domain (1) & Hosting Included",
        "list3": "Admin Dashboard",
        "list4": "Image Gallery",
        "list5": "Appointment Feature",
        "list6": "Products or Services Listing",
        "list7": "Products or Services Details Page",
        "list8": "Blog",
        "list9": "Our Team",
        "list10": "Contact Form",
        "list11": "Testimonials",
        "list12": "SEO Optimized",
        "list13": "Cross Platform compatible",
        "list14": "Cross Browser compatible",
      },
      "img": ProWebsite
    }
  ]

  return (
    <section id="webDesignPackage">
      <Container>
        <Row>
        {
            datas.map((data) => (
                <Col md={4} lg={4} key={data.id}>
            <div className='pakageBox'>
               <div className='pakageList'>
                  <div className="titlePrice">
                     <h3>{data.title}</h3>
                     <p><span>$</span>{data.price}<span className='discounted'>${data.discounted}</span></p>
                  </div>
                  <div className='pakageImg'>
                    <img src={data.img} alt=""/>
                   </div>
               </div>
               <div className='pakagePoints'>
                 <li><FaCircle className='dotCircle'/> {data.list.list1}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list2}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list3}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list4}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list5}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list6}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list7}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list8}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list9}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list10}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list11}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list12}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list13}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.list14}</li>
               </div>
               <div className='pakageFree'>
                 <p><span>FREE</span> 6 Month Free Support</p>
                 <p><span>FREE</span> Staff Training</p>
                 <p><span>FREE</span> Live Support 24/7</p>
                 <p><span>FREE</span> Design And Build By Experts</p>
                 <p><span>FREE</span> Final Formats:</p>
                 <ul>
                    <li><img src={psd} alt=""/></li>
                    <li><img src={html} alt=""/></li>
                    <li><img src={css} alt=""/></li>
                    <li><img src={cms} alt=""/></li>
                 </ul>
               </div>
               <div className='moreFeature'>
                  <h4>MORE FEATURES</h4>
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

export default WebDesignPackage
