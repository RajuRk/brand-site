import React from 'react'
import Header from './Header'
import {Container, Row, Col, Button} from 'react-bootstrap';

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
              <div className='title'>
                <h1>Get a custom logo design by Brands Design.</h1>
              </div>
              <div className='titleBtns'>
                <Button className='leftBtn'>Talk to us Now</Button>
                <Button className='rightBtn'>Get Started</Button>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6}></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home