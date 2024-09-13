import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../assets/img/sponser.png";
import agry from "../assets/img/mic.png";
import food from "../assets/img/network.png";
import fin from "../assets/img/camera.png";
import mobile from "../assets/img/star.png";
import about from "../assets/img/about-img.png";
import banner from "../assets/img/banner.png";
import funding from "../assets/img/funding.png";
import img3 from "../assets/img/image.png";
import { Link } from "react-router-dom";


function Startup() {
  return (
    <>
      <section>
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img
                src={img1}
                className="w-100"
                style={{ objectFit: "cover", height: "auto" }}
                alt="Responsive Image"
              />
            </div>
          </Col>
        </Row>
      </section>

     <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={5} lg={5}>
              <h3 className="title">Empowering Tomorrow's 
Innovators</h3>
              <p className="para">
               Startup Fest Gujarat Season 1 delivered unparalleled value with world-br 
class content, offering direct 1:1 access to industry leaders, speakers, and 
mentors throughout the event. It was a hub for entrepreneurial growth, 
featuring investment opportunities worth hundreds of crores awarded 
onsite, and facilitating countless networking experiences, including 
curated match-ups and interactive sessions. Designed to connect you with 
key players and resources, Startup Fest Gujarat Season I was a launchpad 
for startups to accelerate their growth and make meaningful industry 
connections.
              </p>
              <div className="mt-5">
              <Link to="/register" className="theme-btn">Register Now</Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={about} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <section className="padding-sec">
          <Container>
            <Row>
              <Col lg={5}  xs={12} className="sfg align-content-center">
                <h3 className="title">
                  Startupfest At  A Glance
                </h3>
              </Col>
              <Col lg={6}  xs={12} className="offset-lg-1">
                <Row className="text-center border-custom">
                  <Col>
                    <img src={agry} />
                    <p className="fw-bold pt-3 font-blue ">
                      World-class  content
                    </p>
                  </Col>
                  <Col className="outer-border-startup">
                    <img src={food} />
                    <p className="fw-bold pt-3 font-blue">Curated Network</p>
                  </Col>
                </Row>
                <Row className="text-center">
                  <Col className="pt-4">
                    <img src={fin} />
                    <p className="fw-bold pt-3 font-blue ">
                      Media spotlight  and Exposure
                    </p>
                  </Col>
                  <Col className="outer-border-startup pt-4">
                    <img src={mobile} />
                    <p className="fw-bold pt-3 font-blue">
                      Innovative Prizes & 
                      Investment Oppournities
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>


       <section className="register-sec dark-bg padding-sec showcase">
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
              <h3 className="title">Over Crore In Funding 
Opportunities!</h3>
              <p className="para">
              With an impressive? 532+ crore pool fund, Startup Fest Gujarat Season 1 
offered startups an unprecedented chance to secure the funding they 
need to thrive. The event was packed with opportunities to propel your 
business forward, from high-stakes investment pitches to targeted 
matchups with top investors. Whether you connected with our expert 
panels, networked in our exclusive investor lounge, or took the stage to 
pitch your vision, Startup Fest Gujarat Season 1 was the ultimate platform 
to unlock your startup's potential and secure the resources to scale your 
business.
              </p>
              <div className="mt-5">
              <Link to="/register" className="theme-btn">Register Now</Link>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={funding} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Startup;
