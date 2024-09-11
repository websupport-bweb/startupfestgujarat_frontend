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


function Startup() {
  return (
    <>
      <section>
        <Row className="m-0 p-0">
          <Col lg="12" className="p-0">
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
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Empowering Tomorrow's <br />
Innovators</h3>
              <p className="para">
               Startup Fest Gujarat Season 1 delivered unparalleled value with world-br <br />
class content, offering direct 1:1 access to industry leaders, speakers, and <br />
mentors throughout the event. It was a hub for entrepreneurial growth, <br />
featuring investment opportunities worth hundreds of crores awarded <br />
onsite, and facilitating countless networking experiences, including <br />
curated match-ups and interactive sessions. Designed to connect you with <br />
key players and resources, Startup Fest Gujarat Season I was a launchpad <br />
for startups to accelerate their growth and make meaningful industry <br />
connections.
              </p>

              <button className="theme-btn">Register Now</button>
            </Col>
            <Col lg="6">
              <img src={about} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <section className="container-bg padding-sec">
          <Container>
            <Row>
              <Col className="sfg ">
                {/* <p className="font-blue">SFG 2024</p> */}
                <h3 className="title mt-5">
                  Startupfest At <br /> A Glance
                </h3>
              </Col>
              <Col>
                <Row className="text-center border-custom">
                  <Col>
                    <img src={agry} />
                    <p className="fw-bold pt-3 font-blue ">
                      {" "}
                      World-class <br /> content
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
                      Media spotlight <br /> and Exposure
                    </p>
                  </Col>
                  <Col className="outer-border-startup pt-4">
                    <img src={mobile} />
                    <p className="fw-bold pt-3 font-blue">
                      Innovative Prizes & <br />
                      Investment Oppournities
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </section>


        <section>
        <Row className="m-0 p-0">
          <Col lg="12" className="p-0">
            <div className="p-relative">
              <img
                src={banner}
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
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Over Crore In Funding <br />
Opportunities!</h3>
              <p className="para">
              With an impressive ?532+ crore pool fund, Startup Fest Gujarat Season 1 <br />
offered startups an unprecedented chance to secure the funding they <br />
need to thrive. The event was packed with opportunities to propel your <br />
business forward, from high-stakes investment pitches to targeted <br />
matchups with top investors. Whether you connected with our expert <br />
panels, networked in our exclusive investor lounge, or took the stage to <br />
pitch your vision, Startup Fest Gujarat Season 1 was the ultimate platform <br />
to unlock your startup's potential and secure the resources to scale your <br />
business.
              </p>

              <button className="theme-btn">Register Now</button>
            </Col>
            <Col lg="6">
              <img src={funding} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Startup;
