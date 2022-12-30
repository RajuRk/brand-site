import React from 'react';
import {Container, Row} from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import client1 from '../img/clientStory-1.png';
import client2 from '../img/clientStory-2.png';
import client3 from '../img/clientStory-3.png';

const ClienStory = () => {
  
  const datas = [
    {
        "id": 1,
        "img": client1,
        "title": "Bomb Plant Brewing",
        "desc": "Jonathan Gillmore, an aspired entrepreneur, approached us for the branding of his brewing company. He wanted a strong image to be designed for his brand, the request of which was fulfilled by Brands Design. Operating in an industry where a lot of competitors were fighting against one another, Jonathan planned on breaking through the clutter while giving its company a personality that could separate it from its competitors.",
        "feedback": "This is the third time we used Brands Design’s services, we are very happy with the outcome. They’re very talented, professional and creative. Highly recommended for design work.",
        "clientname": "Jonathan Gillmore",
        "clientPosition": "Owner & CFO"
    },
    {
        "id": 2,
        "img": client2,
        "title": "Bomb Plant Brewing",
        "desc": "Jonathan Gillmore, an aspired entrepreneur, approached us for the branding of his brewing company. He wanted a strong image to be designed for his brand, the request of which was fulfilled by Brands Design. Operating in an industry where a lot of competitors were fighting against one another, Jonathan planned on breaking through the clutter while giving its company a personality that could separate it from its competitors.",
        "feedback": "Excellent work. I am literally in love with the designs provided to me by Brands Design. I will continue to hire them over and over again!",
        "clientname": "Keenya Kelly",
        "clientPosition": "Business Calibration Consultant"
    },
    {
        "id": 3,
        "img": client3,
        "title": "Kanga",
        "desc": "Technology is moving at a fast pace in today’s world. With the technological innovations, that the world is experiencing lately, several problems have aroused that have resulted in the deterioration of nature and the life it breeds. In such a situation, an environmentally friendly brand serves as a savior of life on earth.Kanga Light, an Australia based company, came up with a handy energy saver which takes in energy from the sun while converting it into light for daily use. The product also helps charge low power appliances, making it perfect for use while camping.",
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
