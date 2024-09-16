import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import chiranjiv from "../assets/img/chiranjiv.png";
import snehal from "../assets/img/snehal.png";
import sandip from "../assets/img/sandip.png";
import kuldip from "../assets/img/kuldip.png";
import ccf from "../assets/img/ccf.png";
import parth from "../assets/img/parth.png";
import hiran from "../assets/img/hiran.png";
import kamal from "../assets/img/kamal.png";
import barhat from "../assets/img/barhat.png";
import piyalee from "../assets/img/piyalee.png";
import kedar from "../assets/img/kedar.png";
import munish from "../assets/img/munish.png";
import mehul from "../assets/img/mehul.png";
import milap from "../assets/img/milap.png";
import pankaj from "../assets/img/pankaj.png";
import chintan from "../assets/img/chintan.png";
import sushil from "../assets/img/sushil.png";

const Speakers = () => {
  return (
    <>
      <section className="container-bg padding-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title">Speakers</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4}>
              <div className="speaker-card">
                <img src={chiranjiv} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <p className="mb-0">Mr Chiranjiv Patel</p>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="speaker-card">
                <img src={snehal} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <p className="mb-0">
                    MD of PC Snehal Group, Entrepreneur, Change Maker &
                    Motivaton
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="speaker-card">
                <img src={sandip} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Mr Sandip Gajjar</p>
                    <p className="mb-0 font-sm">
                      Solutions & Business Coach, NLP Master Trainer Consulting
                      CEO at Sneh World
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="speaker-card">
                <img src={kuldip} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">
                      Mr Kuldipsingh Kaler (Positive Pajji)
                    </p>
                    <p className="mb-0 font-sm">Influencer and Author</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="speaker-card">
                <img src={ccf} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <p className="mb-0">
                    CC- Founder & Director Marketing – Pitchvilla
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={parth} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <p className="mb-0">Mr Parth Shah</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="pt-5">
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title">Mentors</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4}>
              <div className="speaker-card">
                <img src={hiran} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Hiranmay Sir</p>
                    <p className="mb-0 font-sm">CEO- iHUB Gujart</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={kamal} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Kamal Sir</p>
                    <p className="mb-0 font-sm">MD – GVFL</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={barhat} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Dr. R. D. Barhat</p>
                    <p className="mb-0 font-sm">JC of Industries</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="pt-5">
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title">Moderator</h3>
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg={4}>
              <div className="speaker-card">
                <img src={piyalee} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Piyalee</p>
                    <p className="mb-0 font-sm">
                      Topic : Role and Impact of the state start-up Eco-system
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={kedar} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Kedar Dave</p>
                    <p className="mb-0 font-sm">Founder of Shuru-Up</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={munish} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Munish Bhatia</p>
                    <p className="mb-0 font-sm">
                      Co – Founder India Accelerato
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={mehul} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Mehul Shah</p>
                    <p className="mb-0 font-sm">Partner, Rasesh Shah & Co.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={milap} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Milapsinh Jadeja</p>
                    <p className="mb-0 font-sm">
                      Topic : What Gets the Investor Saying, “Take My Money !
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={pankaj} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Dr. Pankajray Patel</p>
                    <p className="mb-0 font-sm">
                      Director GSMS – Graduate school of management studies.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={chintan} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Chintan Vyas</p>
                    <p className="mb-0 font-sm">VP. of IPV</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="speaker-card">
                <img src={sushil} alt="" className="w-100" />
                <div className="speaker-card-div">
                  <div>
                    <p className="mb-0">Sushil Sharma</p>
                    <p className="mb-0 font-sm">Marwari Catalyst</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Speakers