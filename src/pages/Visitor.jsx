import React , {useState , useEffect} from 'react'
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
import RegisterYourself from '../components/RegisterYourself';

export default function Visitor() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                  <span>SFG 2025</span>
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
{/* 
          <Row className="mt-5">
            <Col lg={12}>
              <div className="heading-one d-flex justify-content-between">
                <h4 className="title">Event Showcases</h4>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={img1} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Friday, September 13</p>
                  <Link tohref="/" className="name-line">
                    <h5>Friday AfterHours: Sufi Unplugged</h5>
                    <MdArrowOutward />
                  </Link>
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
                  <Link to="/" className="name-line">
                    <h5>
                      Ahmedabad Startup Networking Event (Invite Only) by AY
                      Ventures
                    </h5>
                    <MdArrowOutward />
                  </Link>
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
                  <Link to="/" className="name-line">
                    <h5>
                      14th Engiexpo Industrial Engineering Exhibition Ahmedabad-
                      2024
                    </h5>
                    <MdArrowOutward />
                  </Link>
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
          </Row> */}
        </Container>
      </section>

      <RegisterYourself/>

      <section className="register-sec dark-bg padding-sec">
        <Container>
          <div className="w-70 m-auto">
            <h3 className="title text-center text-white">
              Be a Part of Gujarat's Largest Startup Fest Setting the Pace for
              Innovation!
            </h3>
          </div>
          <Row>
            <Col lg={12}>
              <div className="banner-btns">
                <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn-light light-border">
                  Register Now
                </a>
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
