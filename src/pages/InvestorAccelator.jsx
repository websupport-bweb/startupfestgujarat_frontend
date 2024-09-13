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
          <Row className="justify-content-between">
            <Col lg={5} xs={12}>
              <h3 className="title">Where Startups Meet Leading Investors</h3>
              <p className="para">
                We’ve curated a range of opportunities specifically designed to
                connect you with the key players in the industry. Whether you’re
                looking to meet with venture capitalists, incubators, angel
                investors, or industry leaders, Startup Fest Gujarat is your
                gateway to the connections you need to take your startup to the
                next level
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
              ~– Jeff Bezos, Founder of Amazon
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
              At Startup Fest Gujarat, you’ll encounter a diverse array of startups spanning multiple industries and growth stages, all eager to connect 
              with investors, incubators, and mentors. From cutting-edge Fintech to innovative AI, and from early-stage ventures to those seeking Series A funding, this event is designed to bring together companies across sectors, providing them with the opportunity to secure mentorship, networking, and potential investment to drive their growth forward
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
    </>
  );
}
