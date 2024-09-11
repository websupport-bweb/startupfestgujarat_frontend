import React , {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaArrowDown } from "react-icons/fa6";
import img1 from "../assets/img/event1.jpg"
import img2 from "../assets/img/event2.jpg"
import img3 from "../assets/img/event3.jpg"
import imgEvent from "../assets/img/eventPass.png"
import { MdArrowOutward } from "react-icons/md";
import auth1 from "../assets/img/blockhead.png"
import Slider from 'react-slick';
import parti1 from "../assets/img/client/1.jpg";
import parti2 from "../assets/img/client/2.jpg";
import parti3 from "../assets/img/client/3.jpg";
import parti4 from "../assets/img/client/4.jpg";
import logo from "../assets/img/logo.png";
import map from "../assets/img/Map.png";
import frame from "../assets/img/event-ticket.png";
import { Link } from 'react-router-dom';

export default function Visitor() {
    const [settings] = useState({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
      });


      const [show, setShow] = useState(false);


  const handleShow = () => setShow(true);
  return (
    <div className="gradeint-bg">
      <section>
        <Container>
          <Row>
            <div className="top-banner-two">
              <Col lg={6}>
                <div className="small-heading">
                  <span>SFG 2024</span>
                </div>

                <h4 className="title">
                  Join the Hub of Ideas and Growth at Startup Fest Gujarat!
                </h4>
                <p className="txt-blue">
                  Showcase, Pitch, and Connect with Investors.
                </p>
              </Col>
            </div>
          </Row>

          <Row className="mt-5">
            <Col lg={12}>
              <div className="heading-one d-flex justify-content-between">
                <h4 className="title">Event Showcases</h4>
                <div className="view-mre">
                  <FaArrowDown />
                  <a href="/">View more</a>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={img1} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Friday, September 13</p>
                  <a href="/" className="name-line">
                    <h5>Friday AfterHours: Sufi Unplugged</h5>
                    <MdArrowOutward />
                  </a>
                  <p className="desc">
                    Get ready for a mesmerizing evening with "Sufi Unplugged" at
                    Blockheads featuring the incredible talent of Ayush! Known
                  </p>
                </div>
                <div className="auth-area">
                  <img src={auth1} className="img" />
                  <span>Blockheads vinyl cafe</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={img2} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Monday, September 25</p>
                  <a href="/" className="name-line">
                    <h5>
                      Ahmedabad Startup Networking Event (Invite Only) by AY
                      Ventures
                    </h5>
                    <MdArrowOutward />
                  </a>
                  <p className="desc">
                    Get ready for Engiexpo Industrial Engineering Exhibition
                    2024, a mind-blowing in-person event showcasing the latest
                    advancements.
                  </p>
                </div>
                <div className="auth-area">
                  <img src={auth1} className="img" />
                  <span>Blockheads vinyl cafe</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={img3} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Tuesday, September 30</p>
                  <a href="/" className="name-line">
                    <h5>
                      14th Engiexpo Industrial Engineering Exhibition Ahmedabad-
                      2024
                    </h5>
                    <MdArrowOutward />
                  </a>
                  <p className="desc">
                    This exhibition is a must-attend for all industrial
                    engineering enthusiasts, professionals, and students...
                  </p>
                </div>
                <div className="auth-area">
                  <img src={auth1} className="img" />
                  <span>Blockheads vinyl cafe</span>
                </div>
              </div>
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
              <button className="theme-btn" >
                Register Now
              </button>

            
            </Col>
          </Row>
          <Row>
            <Col className="col-card margin-between">
              <h3>Pitcher</h3>
              <p>
                Pitchers will get a 3 by 3 stall and a chance to{" "}
                <span className="yellow-bg">present their project/idea/ </span>
                startup on stage in front of all the investors.
              </p>
              <img src={img1} className="w-100" />
            </Col>
            <Col className="col-card margin-between">
              <h3>Startup</h3>
              <p>
                Startups/ franchises will get a 2/2 stall and{" "}
                <span className="yellow-bg">
                  visibility in front of all the investors{" "}
                </span>
                coming in.
              </p>
              <img src={img2} className="w-100" />
            </Col>
            <Col className="col-card">
              <h3>Investors</h3>
              <p>
                Investors will get a chance to talk to all the startups and an
                opportunity to{" "}
                <span className="yellow-bg">
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
            <h3 className="title text-center text-white">
              Be a Part of Gujarat's Largest Startup Fest Setting the Pace for
              Innovation!
            </h3>
          </div>
          <Row>
            <Col lg="12">
              <div className="banner-btns">
                <Link to="/register" className="theme-btn-light light-border">
                  Register Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec participant-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="title text-center">Participants</h3>
            </Col>
            <Col lg={10}>
              <div>
                <Slider {...settings}>
                  <img src={parti1} alt="participant" />
                  <img src={parti2} alt="participant" />
                  <img src={parti3} alt="participant" />
                  <img src={parti4} alt="participant" />
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
