import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/invest-banner.png";
import img1 from "../assets/img/investor11.png";
import img2 from "../assets/img/investor2.jpg";
import a1 from "../assets/img/accelator1.jpg";
import img3 from "../assets/img/bg-img-invest.png";
import { Link } from 'react-router-dom';
import opp1 from "../assets/img/opp1.png";
import opp2 from "../assets/img/opp2.png";
import opp3 from "../assets/img/opp3.png";
import opp4 from "../assets/img/opp4.png";
import opp5 from "../assets/img/opp5.png";
import opp6 from "../assets/img/opp6.png";


export default function InvestorAccelator() {
  return (
    <>

<section className="banner-img-top">
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img src={banner} className="w-100" alt="Responsive Image" />
            </div>
          </Col>
        </Row>
      </section>
      {/* <section className="breadcrumb-img">
        <img src={banner} className="w-100" />
      </section> */}

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-between">
            <Col lg={5} xs={12}>
              <h3 className="title">Where Startups Meet Leading Investors</h3>
              <p className="para">
              We’ve curated a range of opportunities specifically designed to connect you with the key players in the industry. Whether you're looking to meet with venture capitalists, incubators, angel investors, or industry leaders, Startup Fest Gujarat is your gateway to the connections you need to take your startup to the next level.
              </p>

              <div className="mt-5">
              <Link to="/register" className="theme-btn">Register Now</Link>
              </div>
            </Col>
            <Col lg={6} xs={12}>
              <img src={img1} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="register-sec padding-sec showcase">
        <Container>
        <img src={img3} />
          <div className="overlay padding-sec">
            <div className="w-70 m-auto content">
              <h5 className="title text-center text-white">
              I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.
              </h5>
              <h3>
              ~–Steve Jobs, Co-founder of Apple
              </h3>
            </div>
           
          </div>
        </Container>
      </section>
      <section className="padding-sec">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={5} lg={5}>
              <h3 className="title">Engage with Leading Startups from Elite Programs</h3>
              <p className="para">
              At Startup Fest Gujarat, you'll encounter a diverse array of startups spanning multiple industries and
               growth stages, all eager to connect with investors, incubators, and mentors. From cutting-edge Fintech
                to innovative AI, and from early-stage ventures to those seeking Series A funding, this event is designed 
                to bring together companies across sectors, providing them with the opportunity to secure mentorship, networking,
                 and potential investment to drive their growth forward.
              </p>

              <div className="mt-5">
              <Link to="/register" className="theme-btn">Register Now</Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={img2} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img
                src={a1}
                className="w-100 inner-banner"
                alt="Responsive Image"
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="padding-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h4 className="title">2023 Opportunities</h4>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp1} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Prestige Sessions </h6>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp2} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Awards & Pitches </h6>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp3} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Media Center </h6>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp4} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Live Sessions </h6>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp5} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Connect & Collaborate </h6>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="box-opp">
                <div className="img-opp">
                  <img src={opp6} class="w-100" />
                </div>
                <div className="text-opp">
                  <h6>Networking Opportunities </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
