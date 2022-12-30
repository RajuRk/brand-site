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
       "title": "Logo Design / Brand Identity",
       "content": "At Brands Design we design logos that become the talk of the town. We take simple ideas and turn them into purposeful custom design logos."
    },
    {
        "id": 2,
        "img": PackageDesign,
        "title": "Business & Advertising",
        "content": "We believe in turning your brand stories into best business advertisements that can both attract and convert potential clients."
     },
     {
        "id": 3,
        "img": WebDesign,
        "title": "Web Design & Development",
        "content": "Not a typical website design company, at Brands Design we give full liberty to our designers so that they can come up with a creative & exclusive website designs."
     },
     {
        "id": 4,
        "img": PrintDesign,
        "title": "Marketing Material Design",
        "content": "We create best marketing material designs including, label, flyers, signage, packaging, and everything that can make an impression of your brand."
     },
     {
        "id": 5,
        "img": SEO,
        "title": "Search Engine Optimization",
        "content": "We craft unique optimization strategies for each business and make sure your website is well optimized to jump on higher ranks each time."
     },
     {
        "id": 6,
        "img": EVS,
        "title": "Explainer Videos Services",
        "content": "Driven by perfection, our animators can produce videos that will be remembered for ages. Innovative, storytelling videos which will be self-explanatory."
     }
  ]  


  return (
    <section id="features">
      <Container>
        <Row>
          <div className='title'>
            <h2>Get to Know the best Features</h2>  
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
