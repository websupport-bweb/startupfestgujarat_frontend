import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../assets/img/img-1.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";
import { Link } from 'react-router-dom';

export default function RegisterYourself() {
  return (
    <div>
      <section className="padding-sec">
        <Container>
          <Row className='align-items-center'>
            <Col lg={8} md={9} xs={6}>
              <h3 className="title">Register Yourself</h3>
            </Col>
            <Col lg={4} md={3} xs={6} className="text-end">
              <Link to="/register" className="theme-btn">
                Register Now
              </Link>
            </Col>
            <Col lg={6} xs={12}>
              <h5 className="para">
                People who register for the Start-Up Fest will be allotted a
                5-minute time slot to present their startup in front of
                potential investors.
              </h5>
            </Col>
            {/* <Col className="flex-shrink-0 text-end">
              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col> */}
          </Row>
          <Row className="justify-content-between">
            <Col lg={3} md={3} xs={12} className="col-card">
              <Link to="/register" className="no-design">
                <div className="name-line pitcher-card-div">
                  <h3>
                    <Link to="/register" className="pitcher-card-a">
                      Pitcher
                    </Link>
                  </h3>
                  <Link href="/register" className="pitcher-card-a">
                    <MdArrowOutward/>
                  </Link>
                </div>
                <p>
                  Pitchers will get a 3 by 3 stall and a chance to&nbsp;
                  <span className="yellow-bg">present their project/idea/</span>
                  &nbsp; startup on stage in front of all the investors.
                </p>
                <img src={img1} className="w-100" />
              </Link>
            </Col>
            <Col lg={3} md={3} xs={12} className="col-card">
              <Link to="/register" className="no-design">
                <div className="name-line pitcher-card-div">
                  <h3>
                    <Link to="/register" className="pitcher-card-a">
                      Startup
                    </Link>
                  </h3>
                  <Link to="/register" className="pitcher-card-a">
                    <MdArrowOutward/>
                  </Link>
                </div>
                <p>
                  Startups/ franchises will get a 2/2 stall and&nbsp;
                  <span className="yellow-bg">
                    visibility in front of all the investors
                  </span>
                  &nbsp; coming in.
                </p>
                <img src={img2} className="w-100" />
              </Link>
            </Col>

            <Col lg={3} md={3} xs={12} className="col-card">
              <Link to="/register" className="no-design">
                <div className="name-line pitcher-card-div">
                  <h3>
                    <Link to="/register" className="pitcher-card-a">
                      Investors
                    </Link>
                  </h3>
                  <Link to="/register" className="pitcher-card-a">
                    <MdArrowOutward/>
                  </Link>
                </div>
                <p>
                  Investors will get a chance to talk to all the startups and an
                  opportunity to &nbsp;
                  <span className="yellow-bg">
                    multiply their money by 2-3 times.
                  </span>
                </p>
                <img src={img3} className="w-100" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
