import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import parti1 from "../assets/img/participants1.jpg";
import parti2 from "../assets/img/participants2.png";
import parti3 from "../assets/img/regis-closed.jpg";
import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";
import { Link } from 'react-router-dom';


export default function Participants() {
  return (
    <>
      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">
                Pitch Your Startup <br />
                to Investors
              </h3>
              <p className="para">
                Pitchers will not only have a dedicated 3 by 3 stall to showcase
                their projects, ideas, or startups, but they will also have a
                unique opportunity to captivate and engage with a large audience
                of potential investors on a grand stage. This platform allows
                pitchers to present their visions, demonstrate their passion,
                and persuade investors to join them on their entrepreneurial
                journey.
              </p>

              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
            <Col lg="6">
              <img src={parti1} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="padding-sec">
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4}>
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="box">
                    <img src={clock} width={45} />
                    <h4>Time</h4>
                    <p>10:00 AM TO 10:00 PM</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <img src={parti3} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">Start-up / Franchise</h3>
              <p className="para">
                Startups and franchises will have a well-equipped 2/2 stall that
                serves as their business hub throughout the event. This prime
                location ensures maximum visibility and exposure to a diverse
                range of investors, offering startups the chance to make
                impactful connections, form strategic partnerships, and attract
                crucial funding. The event serves as a valuable platform for
                startups to showcase their innovative products or services and
                gain the attention they deserve.
              </p>
              

              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
            <Col lg="6">
              <img src={parti2} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Register Yourself</h3>
              <h5 className="para-custom">
                People who register for the Start-Up Fest will be allotted a
                5-minute time slot to present their startup in front of
                potential investors.
              </h5>
            </Col>
            <Col className="flex-shrink-0 text-end">
              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col>
          </Row>
          <Row>
            <Col className="col-card margin-between">
              <h3>Pitcher</h3>
              <p>
                Pitchers will get a 3 by 3 stall and a chance to 
                 <span className="yellow-bg">present their project/idea/ </span> 
                 startup on stage in front of all the investors.
              </p>
              <img src={img1} className="w-100" />
            </Col>
            <Col className="col-card margin-between">
              <h3>Startup</h3>
              <p>
                Startups/ franchises will get a 2/2 stall and <span className="yellow-bg">visibility in front of all the investors</span> coming in.
              </p>
              <img src={img2} className="w-100" />
            </Col>
            <Col className="col-card">
              <h3>Investors</h3>
              <p>
                Investors will get a chance to talk to all the startups and an
                opportunity to <span className="yellow-bg">
                  multiply their money by 2-3 times.
                </span>
              </p>
              <img src={img3} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="register-sec dark-bg padding-sec">
        <Container>
          <div className="w-70 m-auto">
            
          </div>
          <Row>
            <Col lg={8}>
            <h3 className="title text-white mb-0">
            Let' s connect to know more!
            </h3>
            </Col>
            <Col lg={4}>
              <div className="banner-btns">
                <Link to="/register" className="theme-btn-light light-border">
                  Register Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
