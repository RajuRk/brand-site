import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Container, Row} from 'react-bootstrap';
import sliderImg1 from '../img/slider-1.jpg';
import sliderImg2 from '../img/slider-2.jpg';
import sliderImg3 from '../img/slider-3.jpg';
import sliderImg4 from '../img/slider-4.jpg';
import sliderImg5 from '../img/slider-5.jpg';
import sliderImg6 from '../img/slider-6.jpg';

const Portfolio = () => {

    const datas = [
        {
            "id": 1,
            "img": sliderImg1,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        },
        {
            "id": 2,
            "img": sliderImg2,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        },
        {
            "id": 3,
            "img": sliderImg3,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        },
        {
            "id": 4,
            "img": sliderImg4,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        },
        {
            "id": 5,
            "img": sliderImg5,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        },
        {
            "id": 6,
            "img": sliderImg6,
            "title": "Logo Design",
            "content": "Math is hard but web design is grueling. The good news is, you’ve got experts for the latter. At Brands Design we create website design templates that are relevant to the business and industry you operate in."
        }
    ]
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
  
  return (
    <section id="portfolio">
      <Container fluid>
        <Row>
            <div className='title'>
                <h2>Our Designers Portfolio</h2>
            </div>
            <Slider {...settings} className="sliderWidth">
                {
                    datas.map((data) => (
                        <div className="hoverContent" key={data.id}>
                            <div className="content">
                                <div className="content-overlay"></div>
                                <img className="content-image" src={data.img} alt=""/>
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">{data.title}</h3>
                                    <p className="content-text">{data.content}</p>
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

export default Portfolio
