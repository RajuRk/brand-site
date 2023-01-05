import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Container, Row} from 'react-bootstrap';
import sliderImg1 from '../img/portfolio/1-min.png';
import sliderImg2 from '../img/portfolio/2-min.png';
import sliderImg3 from '../img/portfolio/3-min.png';
import sliderImg4 from '../img/portfolio/4-min.png';
import sliderImg5 from '../img/portfolio/5-min.png';
import sliderImg6 from '../img/portfolio/6-min.png';
import sliderImg7 from '../img/portfolio/7-min.png';
import sliderImg8 from '../img/portfolio/8-min.png';
import sliderImg9 from '../img/portfolio/9-min.png';
import sliderImg10 from '../img/portfolio/10-min.png';
import sliderImg11 from '../img/portfolio/11-min.png';
import sliderImg12 from '../img/portfolio/12-min.png';
import sliderImg13 from '../img/portfolio/13-min.png';
import sliderImg14 from '../img/portfolio/14-min.png';
import sliderImg15 from '../img/portfolio/15-min.png';
import sliderImg16 from '../img/portfolio/16-min.png';
import sliderImg17 from '../img/portfolio/17-min.png';

const Portfolio = () => {

    const datas = [
        {
            "id": 1,
            "img": sliderImg1,
            "title": "Designing every bit",
        },
        {
            "id": 2,
            "img": sliderImg2,
            "title": "Design naturally",
        },
        {
            "id": 3,
            "img": sliderImg3,
            "title": "Reaching you",
        },
        {
            "id": 4,
            "img": sliderImg4,
            "title": "Branding distinctly",
        },
        {
            "id": 5,
            "img": sliderImg5,
            "title": "Brand marking",
        },
        {
            "id": 6,
            "img": sliderImg6,
            "title": "Target marketer",
        },
        {
            "id": 7,
            "img": sliderImg7,
            "title": "Designing unique",
        },
        {
            "id": 8,
            "img": sliderImg8,
            "title": "Brand to buy",
        },
        {
            "id": 9,
            "img": sliderImg9,
            "title": "Marketing careers",
        },
        {
            "id": 10,
            "img": sliderImg10,
            "title": "Designing your identity",
        },
        {
            "id": 11,
            "img": sliderImg11,
            "title": "Stellar design",
        },
        {
            "id": 12,
            "img": sliderImg12,
            "title": "Winger cab advertising",
        },
        {
            "id": 13,
            "img": sliderImg13,
            "title": "Logo Design",
        },
        {
            "id": 14,
            "img": sliderImg14,
            "title": "Logo Design",
        },
        {
            "id": 15,
            "img": sliderImg15,
            "title": "Logo Design",
        },
        {
            "id": 16,
            "img": sliderImg16,
            "title": "Logo Design",
        },
        {
            "id": 17,
            "img": sliderImg17,
            "title": "Logo Design",
        },

    ]
  
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
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
