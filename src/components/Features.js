import React from 'react'
import {Container, Row } from 'react-bootstrap';
import LogoDesign from '../img/logo-design.png'
import PackageDesign from '../img/package-design.png'
import WebDesign from '../img/web-design-development.png'
import PrintDesign from '../img/print-design.png'
import SEO from '../img/search-engine-optimization.png'
import EVS from '../img/explainer-videos-services.png'

const Features = () => {
  
  const datas = [
    {
       "id": 1,
       "img": LogoDesign,
       "title": "SEARCH ENGINE OPTIMIZATION (SEO)",
       "content": "Search Engine Optimization is essential for 99% of businesses and a key to growing your website traffic. Our SEO experts can optimize any website and will be on top of all search engines within no time."
    },
    {
        "id": 2,
        "img": PackageDesign,
        "title": "BRANDING",
        "content": "We excel in meticulously analyzing your target group, identifying the channels and strategizing a plan using Digital Branding's proven methodology and work towards it to make your business into a Brand."
     },
     {
        "id": 3,
        "img": WebDesign,
        "title": "SOCIAL MEDIA MARKETING (SMM)",
        "content": "Social Media Management helps you convert your audience to fans & followers. Expand your brand's reach on the internet's hottest social sites. Creative content & seamless execution are the two consistent keys to excel online."
     },
     {
        "id": 4,
        "img": PrintDesign,
        "title": "SEARCH ENGINE MARKETING (SEM)",
        "content": "We identify and capture the attention of potential customers  by identifying best-suited channels and setting optimal budgets which eventually provides maximum results by increasing your organic clients."
     },
     {
        "id": 5,
        "img": SEO,
        "title": "WEBSITE DEVOLOPMENT",
        "content": "We design and Develop websites that are creative, mobile responsive, lag-free, eye-catching, and SEO friendly. Our capabilities include Static, Dynamic and E- Commerce Websites."
     },
     {
        "id": 6,
        "img": EVS,
        "title": "APP DEVELOPMENT",
        "content": "To create a fast and smooth app for any platform, we incorporate the latest technology along with the best experts in the field, we also deliver products with an outsourcing app development model."
     }
  ]  


  return (
    <section id="features">
      <Container>
        <Row>
          <div className='title'>
            <h2>Our Digital Marketing Services</h2>  
          </div>
          <div className='featuresFlex'> 
            {
                datas.map((data) => (
                    <div key={data.id} className="featureBox">
                        <div className='featuresSec'>
                            <div className="featureImg">
                                <img src={data.img} alt=""/>
                            </div>
                            <div className='featureContnet'>
                                <p><strong>{data.title}</strong></p>
                                <p>{data.content}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
        </Row>  
      </Container> 
    </section>
  )
}

export default Features
