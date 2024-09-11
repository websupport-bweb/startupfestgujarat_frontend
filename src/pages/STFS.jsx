import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import urban from "../assets/img/urban.png";
import jainam from "../assets/img/jainam.png";
import bull from "../assets/img/bull.png";
import dharmil from "../assets/img/dharmil.png";
import harsh from "../assets/img/harsh.png";
import pabi from "../assets/img/pabi.png";
import rabari from "../assets/img/rabari.png";


const STFS = () => {
  return (
    <>

<section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg={4}>
              <h3 className="title">
              Shark tank Featured 
              Startup Journey
              </h3>
            </Col>
            <Col lg={8} className='hello'>
              <img src={urban} className="" />
              <img src={bull} className="" />
              <img src={pabi} className="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Urban Naps</h3>
            </Col>
          </Row>
          <Row className='g-4'>
            <Col lg={4} className='speaker-card'>
            <img src={urban} alt="" className='w-100' style={{objectFit:"contain", objectPosition:"center"}}/>
            <div className='speaker-card-div' style={{visibility:"hidden"}}>
                <div>
            <p className='mb-0'>Piyalee</p>
            <p className='mb-0 font-sm'>Topic : Role and Impact of the state start-up Eco-system</p>
            </div>
            </div>
            </Col>
            <Col lg={4} className='speaker-card'>
            <img src={jainam} alt="" className='w-100'/>
            <div className='speaker-card-div'>
                <div>
            <p className='mb-0'>Piyalee</p>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">BullSpree</h3>
            </Col>
          </Row>
          <Row className='g-4'>
            <Col lg={4} className='speaker-card'>
            <img src={bull} alt="" className='w-100' style={{objectFit:"contain", objectPosition:"center"}}/>
            <div className='speaker-card-div' style={{visibility:"hidden"}}>
                <div>
            <p className='mb-0'>Piyalee</p>
            <p className='mb-0 font-sm'>Topic : Role and Impact of the state start-up Eco-system</p>
            </div>
            </div>
            </Col>
            <Col lg={4} className='speaker-card'>
            <img src={dharmil} alt="" className='w-100'/>
            <div className='speaker-card-div'>
                <div>
            <p className='mb-0'>Dharmil Bavishi</p>
            </div>
            </div>
            </Col>
            <Col lg={4} className='speaker-card'>
            <img src={harsh} alt="" className='w-100'/>
            <div className='speaker-card-div'>
                <div>
            <p className='mb-0'>Harsh Dhanawat</p>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Pabiben.com</h3>
            </Col>
          </Row>
          <Row className='g-4'>
            <Col lg={4} className='speaker-card'>
            <img src={pabi} alt="" className='w-100' style={{objectFit:"contain", objectPosition:"center"}}/>
            <div className='speaker-card-div' style={{visibility:"hidden"}}>
                <div>
            <p className='mb-0'>Piyalee</p>
            <p className='mb-0 font-sm'>Topic : Role and Impact of the state start-up Eco-system</p>
            </div>
            </div>
            </Col>
            <Col lg={4} className='speaker-card'>
            <img src={rabari} alt="" className='w-100'/>
            <div className='speaker-card-div'>
                <div>
            <p className='mb-0'>Ms Pabiben Rabari</p>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default STFS
