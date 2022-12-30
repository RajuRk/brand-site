import React from 'react'
import {Container, Row} from 'react-bootstrap';
import v2s from '../img/v2s.webp';
import Dhanvantri from '../img/dhanvantri.webp';
import Zavdil from '../img/zavdil.webp';
import Mcet from '../img/mct.webp';
import FluidPumbs from '../img/fluid-pumps.webp';
import Rathinam from '../img/rathinam.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const CustomerReviews = () => {

  const datas = [
    {
        "id": 1,
        "img": v2s,
        "name": "V2S Finance Srvices PVT LTD",
        "content": "I am absolutely satisfied with the project we have done with Rank You Higher team. The Professional developers, Creative Designer decent project manager and passioned marketing team"
    },
    {
        "id": 2,
        "img": Dhanvantri,
        "name": "Dhanvantri Biomedical PVT LTD",
        "content": "Working with Rank you Higher team has been a pleasure to work with, very polite, very understanding. All their team members are friendly, professional and detail-oriented. A real treat!"
    },
    {
        "id": 3,
        "img": Zavdil,
        "name": "One Market Place PVT LTD",
        "content": "Since working with RYH our lead quality and profitability have skyrocketed! I have also been impressed by the quality of services and constant communication and tracking RHY offers."
    },
    {
        "id": 4,
        "img": Mcet,
        "name": "Mahalingam College",
        "content": "RYH have provided great services and strategies for accelerating our business growth. Most importantly, they are willing and able to adapt our marketing strategy to help us succeed in our industry."
    },
    {
        "id": 5,
        "img": FluidPumbs,
        "name": "Fluid Pumps PVT LTD",
        "content": "We chose RYH to become our official partner and developer of our mobile strategy due to their professional and expert approach to work. It takes a lot of dedication and effort to work."
    },
    {
        "id": 6,
        "img": Rathinam,
        "name": "Rathinam Groups",
        "content": "RYH has proven to be an integral marketing partner for our team. They handled our website revamp, as well as have continued to work with us to optimize our SEO, create campaigns."
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="customerReview">
      <Container>
        <Row>
          <div className="title">
            <h2 style={{color: "#ffffff"}}>What Our Customer Say</h2>
          </div>
          <Slider {...settings}>
             {
                datas.map((data) => (
                    <div className='testimonial-slider' key={data.id}>
                        <div className='testimonial-carosul'>
                            <div className='testimonial-img'>
                                <img src={data.img} alt=""/>
                            </div>
                            <div className='testimonial-desc'>
                                <p>{data.content}</p>
                                <p className="companyName">{data.name}</p>
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

export default CustomerReviews
