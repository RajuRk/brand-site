import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SmmAwareness from '../img/smm-awareness.svg';
import SmmGrowSale from '../img/smm-grow-sale.svg';
import SmmEnterprise from '../img/smm-enterprise.svg';
import {FaCircle} from "react-icons/fa";

const SocialPackage = () => {
  const datas = [
    {
      "id": 1,
      "title": "Brand Awareness",
      "price": 499,
      "discount": 666,
      "img": SmmAwareness,
      "list": {
        "li1": "2 AD Campaigns",
        "li2": "2 Motion Graphics",
        "li3": "Facebook & Instagram",
        "li4": "Detailed Targeted Audience",
        "li5": "Copywriting",
        "li6": "A/B Testing",
        "li7": "AD Reports",
        "li8": "Paid Boost",
        "li9": "Social Media Audit",
        "li10": "Identity Kit",
        "li11": "Generic Lead Catering",
        "li12": "Messaging Automation",
        "li13": "Website Tacking via ADS",
        "li14": "Google Insight Dashboard",
      }
    },
    {
      "id": 2,
      "title": "Grow Awareness",
      "price": 699,
      "discount": 933,
      "img": SmmGrowSale,
      "list": {
        "li1": "3 AD Campaigns",
        "li2": "4 Motion Graphics",
        "li3": "Facebook, Instagram, LinkedIn & Twitter",
        "li4": "Detailed Targeted Audience",
        "li5": "Copywriting",
        "li6": "A/B Testing",
        "li7": "AD Reports",
        "li8": "Paid Boost",
        "li9": "Social Media Audit",
        "li10": "Identity Kit",
        "li11": "Generic Lead Catering",
        "li12": "Messaging Automation",
        "li13": "Website Tacking via ADS",
        "li14": "Google Insight Dashboard",
      }
    },
    {
      "id": 3,
      "title": "Brand Awareness",
      "price": 1249,
      "discount": 1666,
      "img": SmmEnterprise,
      "list": {
        "li1": "4 AD Campaigns",
        "li2": "6 Motion Graphics",
        "li3": "Facebook, Instagram, LinkedIn, Twitter & YouTube",
        "li4": "Detailed Targeted Audience",
        "li5": "Copywriting",
        "li6": "A/B Testing",
        "li7": "AD Reports",
        "li8": "Paid Boost",
        "li9": "Social Media Audit",
        "li10": "Identity Kit",
        "li11": "Generic Lead Catering",
        "li12": "Messaging Automation",
        "li13": "Website Tacking via ADS",
        "li14": "Google Insight Dashboard",
      }
    }
  ]
  return (
    <section id="socialPackage">
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
                 <li><FaCircle className='dotCircle'/> {data.list.li6}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li7}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li8}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li9}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li10}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li11}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li12}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li13}</li>
                 <li><FaCircle className='dotCircle'/> {data.list.li14}</li>
               </div>
               <div className='pakageFree'> 
                <p><span>FREE</span> Final Formats:</p>
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

export default SocialPackage
