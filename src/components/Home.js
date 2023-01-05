import React from 'react'
import Header from './Header'
import {Container, Row, Col, Button} from 'react-bootstrap';
import BannerImg from '../img/bannerImg.png';

const Home = () => {
  return (
    <section id="home">
      <Header/>
      <Container>
        <Row className='homeRow'>
          <Col md={6} lg={6}>
            <div className='homeLeftContent'>
              <div className='subHeader'>
                <p>The # 1 choice for logo design company.</p>
              </div>
              <div className='title' style={{textAlign: "left"}}>
                <h1>Get a custom logo design by Brands Design.</h1>
              </div>
              <div className='titleBtns'>
                <a href="tel:919585380011"><Button className='leftBtn'>Talk to us Now</Button></a>
                <Button className='rightBtn'>Get Started</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div className='banner-img-right'>
              <img src={BannerImg} alt="" style={{width: "100%"}}/>            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home