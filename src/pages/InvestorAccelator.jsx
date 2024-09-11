import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/invest-banner.jpg";
import img1 from "../assets/img/investor1.jpg";
import img2 from "../assets/img/investor2.jpg";
import img3 from "../assets/img/bg-img-invest.png";
import { Link } from 'react-router-dom';


export default function InvestorAccelator() {
  return (
    <>
      <section className="breadcrumb-img">
        <img src={banner} className="w-100" />
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Where Startups Meet Leading Investors</h3>
              <p className="para">
                We’ve curated a range of opportunities specifically designed to
                connect you with the key players in the industry. Whether you’re
                looking to meet with venture capitalists, incubators, angel
                investors, or industry leaders, Startup Fest Gujarat is your
                gateway to the connections you need to take your startup to the
                next level
              </p>

              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
            <Col lg="6">
              <img src={img1} className="w-100" />
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
              ~– Jeff Bezos, Founder of Amazon
              </h3>
            </div>
           
          </div>
        </Container>
      </section>
      <section className="padding-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Where Startups Meet Leading Investors</h3>
              <p className="para">
                We’ve curated a range of opportunities specifically designed to
                connect you with the key players in the industry. Whether you’re
                looking to meet with venture capitalists, incubators, angel
                investors, or industry leaders, Startup Fest Gujarat is your
                gateway to the connections you need to take your startup to the
                next level
              </p>

              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
            <Col lg="6">
              <img src={img2} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
