import React from 'react';
import {Container, Row} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import client1 from '../img/MCET.png';
import client2 from '../img/FP.png';
import client3 from '../img/AIC.png';
import client4 from '../img/Rathinam.png';
import client5 from '../img/Maltiyo.png';

const ClienStory = () => {
  
  const datas = [
    {
        "id": 1,
        "img": client1,
        "title": "MCET",
        "desc": "Dr. Mahalingam College of Engineering and Technology (MCET) is a  self-financing educational institution located in Pollachi, Coimbatore District. To honour the 75th birthday of this remarkable visionary, MCET was founded in 1998. As a professional organisation, we unquestionably require a competent specialist for our digitally associated operations and marketing. Before we connected with Rank You Higher, we were connected to a digital marketing firm. But we were aware of the deficit. Following our connection with Rank You Higher, we are no longer required to check the status of web-related works. An authority in this area is Rank You Higher. Additionally, they are constantly available for the services. Wonderful job Rank You Higher.",
        "feedback": "This is the third time we used Brands Designs services, we are very happy with the outcome. They're very talented, professional and creative. Highly recommended for design work.",
        "clientname": "Jonathan Gillmore",
        "clientPosition": "Owner & CFO"
    },
    {
        "id": 2,
        "img": client2,
        "title": "Fluid Pumps",
        "desc": "FLUID PUMPS AND SYSTEMS, the authorised distributor of Grundfos Pumps in various Tamil Nadu districts. We are a company that offers complete pump and pumping solutions. For the past ten years and counting, we have been a significant player in the market. We contacted Rank You Higher for all of our web solutions from our website to social media posts. Because of Rank You Higher's devoted and reliable services and policies, we have enjoyed good connections with our customers. Customers have found it easier to contact us since our website has reached a great number of audiences.",
        "feedback": "Our business is to help your business succeed. Get in hands with us for all digital solutions.",
        "clientname": "Keenya Kelly",
        "clientPosition": "Business Calibration Consultant"
    },
    {
        "id": 3,
        "img": client3,
        "title": "AIC Raise",
        "desc": "AIC RAISE develops a comprehensive ecosystem for social startups to maximise earnings and advantages for the environment and society. It was founded as part of the prestigious Atal Innovation Mission (AIM) of the Indian government's NITI Aayog. AIC RAISE supports and promotes creative startups. AIC Raise collaborates closely with the manager of the digital marketing strategy of Rank You Higher, who specialises in customer experience. The company developed ads that targeted all the social media platforms in an effort to quadruple website conversions year over year (YOY). It produced the best results for our business. The top among the greatest is Rank You Higher",
        "feedback": "Brands Design is awesome! They helped with my t-shirt design and completed it with my product’s branding! I plan to utilize their skill set again in the very near future.",
        "clientname": "Aram Cargill",
        "clientPosition": "CEO"
    },
    {
      "id": 4,
      "img": client4,
      "title": "Rathinam Group of Institutions",
      "desc": "Rathinam College is among the best colleges in Coimbatore, Tamil Nadu. As a top college in Coimbatore, we provide programmes in the arts and sciences, engineering, management, architecture, and physiotherapy. We worked with Rank You Higher to create our brochure, ads, and website. We didn't notice any gaps in the digital solutions for our institutions after they began working with us. Rank Your Higher is a very resourceful company in the field of digital marketing. From the website to the commercials, we could see their professional effort in all of the work. Rank You Higher in appreciation",
      "feedback": "Brands Design is awesome! They helped with my t-shirt design and completed it with my product’s branding! I plan to utilize their skill set again in the very near future.",
      "clientname": "Aram Cargill",
      "clientPosition": "CEO"
  },
  {
    "id": 5,
    "img": client5,
    "title": "Maltiyo",
    "desc": "Maltiyo is a brand that was founded in 2021 with a focus on producing Natural Health Drink Beverages using conventional manufacturing techniques. Even though we have been making nutritious items, we haven't been able to reach many customers. That was a major setback for us, and it seriously hurt our company. In reality, we had run out of suggestions for boosting our business online. We were able to reach the right and important customers and grow our business after interacting with Rank You Higher. We must appreciate Rank You Higher for their unwavering commitment to helping our company succeed.",
    "feedback": "Brands Design is awesome! They helped with my t-shirt design and completed it with my product’s branding! I plan to utilize their skill set again in the very near future.",
    "clientname": "Aram Cargill",
    "clientPosition": "CEO"
  },
]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="clientStory">
      <Container>
        <Row>
           <div className='title'>
             <h2>Client Success Story</h2>
           </div>
           <Slider {...settings} className="clientStorySlder">
             {
                datas.map((data) => (
                    <div className="clientStrory_Carosul" key={data.id}>
                        <div className='storySection'>
                            <div className="storyDesc">
                                <div className='client-title'>
                                    <h3>{data.title}</h3>
                                </div>
                                <div className="client-desc">
                                    <p>{data.desc}</p>
                                </div>
                                <div className='client-feedback'>
                                    <p className='feedbackdesc'>{data.feedback}</p>
                                </div>
                                <div className='client-name-position'>
                                    <h5>{data.clientname}</h5>
                                    <p>{data.clientPosition}</p>
                                </div>
                            </div>
                            <div className='storyImg'>
                                <div className='clientImg'>
                                    <img src={data.img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
             }
           </Slider>
        </Row>
      </Container> 
    </section>
  )
}

export default ClienStory
