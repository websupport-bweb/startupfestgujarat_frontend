import React , { useState }from "react";
import Slider from 'react-slick';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../assets/img/about-img.png";
import bannerImg from "../assets/img/image 15image.png";
import { MdArrowOutward } from "react-icons/md";
import venue from "../assets/img/venue.png";
import { FaArrowDown } from "react-icons/fa6";
import auth1 from "../assets/img/shilp-icon.png"
import highbg from "../assets/img/highlights-bg.png"
import one from "../assets/img/event1.jpg"
import two from "../assets/img/event2.jpg"
import three from "../assets/img/event3.jpg"
import { Link } from "react-router-dom";

export default function Highlights() {

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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <>
      <section className="">
        <img src={bannerImg} className="w-100" />
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={5} lg={5}>
              <h3 className="title">
                Startup Fest Gujarat: <br />
                Where Innovation Meets Investment
              </h3>
              <p className="para">
                Snehshilp foundation’s “start-up fest gujarat” highlights the
                thriving spirit of entrepreneurship and innovation in the
                region. Founded and driven by the visionary mrs. Snehal
                brahmbhatt, the event aims to fill the void in start-up support
                by providing a comprehensive platform for fresh ideas to
                flourish.
              </p>
              <p className="para">
                The annual event brings together start-ups, investors, and
                Industry collaboration.Leaders for two days, creating an
                Atmosphere of inspiration and fruitful collaboration.
              </p>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={about} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          {/* <Row className="d-flex">
            <Col className="flex-grow-1">
              <h3 className="title mb-5">Event Showcases</h3>
            </Col>
            <Col className="flex-shrink-0 text-end">
              <p className="color-sky">
                <IoArrowDown style={{ fontSize: "23px" }} />
                View more
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="col-card" lg={4} style={{ position: "relative" }}>
              <img src={event1} className="w-100" />
              <h5 className=".highlight-col-card2-p">Friday, September 13</h5>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Panel Discussion</h3>
                <MdArrowOutward style={{ fontSize: "23px", width: "20%" }} />
              </div>
              <p className="color-grey">
                Get ready for a mesmerizing evening with "Sufi Unplugged" at
                Blockheads featuring the incredible talent...
              </p>
              <div className="bhDiv">
                <img src={bhImg} />
                <h6>Snehshilp Foundation</h6>
              </div>
            </Col>
            <Col className="col-card" lg={4} style={{ position: "relative" }}>
              <img src={event2} className="w-100" />
              <h5 className=".highlight-col-card2-p">Monday, September 28</h5>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Start-Up Fest 2.0 Gujarat by Snehshilp Foundation</h3>
                <MdArrowOutward style={{ fontSize: "23px", width: "20%" }} />
              </div>
              <p className="color-grey">
                Get ready for Engiexpo Industrial Engineering Exhibition 2024, a
                mind-blowing in-person event showcasing the la...
              </p>
              <div className="bhDiv">
                <img src={bhImg} />
                <h6>Snehshilp Foundation</h6>
              </div>
            </Col>
            <Col className="col-card" lg={4} style={{ position: "relative" }}>
              <img src={event3} className="w-100" />
              <h5 className=".highlight-col-card2-p">Tuesday, September 30</h5>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>
                  14th Engiexpo Industrial Engineering Exhibition Ahmedaba...
                </h3>
                <MdArrowOutward style={{ fontSize: "23px", width: "20%" }} />
              </div>
              <p className="color-grey">
                This exhibition is a must-attend for all industrial engineering
                enthusiasts, professionals, and students...
              </p>
              <div className="bhDiv">
                <img src={bhImg} />
                <h6>Snehshilp Foundation</h6>
              </div>
            </Col>
          </Row> */}
          <Row className="mt-5">
            <Col lg={12}>
              <div className="heading-one d-flex justify-content-between">
                <h4 className="title">Event Showcases</h4>
                {/* <div className="view-mre">
                  <FaArrowDown />
                  <a href="/">View more</a>
                </div> */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={one} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Friday, September 13</p>
                  <Link to="/startup" className="name-line">
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
                  <span>Snehshilp Foundation</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={two} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Saturday, September 28</p>
                  <Link to="/startup" className="name-line">
                    <h5>Start-Up Fest 2.0 Gujarat by Snehshilp Foundation</h5>
                    <MdArrowOutward />
                  </Link>
                  <p className="desc">
                    Join us for the second edition of Start-Up Fest Gujarat, a
                    day dedicated to empowering your business journey with
                    unparalleled knowledge, inspiration, and networking
                    opportunities. 
                  </p>
                </div>
                <div className="auth-area">
                  <img src={auth1} className="img" />
                  <span>Snehshilp Foundation</span>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="event-box">
                <div className="img-area">
                  <img src={three} className="w-100" />
                </div>

                <div className="txt-area">
                  <p className="eve-date">Tuesday, September 30</p>
                  <Link to="/startup" className="name-line">
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
                  <span>Snehshilp Foundation</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="register-sec padding-sec showcase">
        <Container>
          <img src={highbg} />
          <div className="overlay padding-sec">
            <div className="w-70 m-auto content">
              <h5 className="title text-center text-white">
                It’s not about ideas. <br /> It’s about making ideas happen.
              </h5>
              <h3>~ Scott Belsky</h3>
            </div>
          </div>
        </Container>
      </section>
      <section className="padding-sec">
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={5} lg={5}>
              <h3 className="title">2023 Venue</h3>
              <p className="para">
                Located off the Sarkhej Gandhinagar Highway, Science City is an
                ambitious initiative of the government of Gujarat to trigger an
                inquiry of science in the mind of a common citizen with the aid
                of entertainment and experiential knowledge. Covering an area of
                more than 107 hectares, the idea is to create imaginative
                exhibits, virtual reality activity corners, and live
                demonstrations in an easily understandable manner
              </p>
              <p className="para">
                Gujarat Science City is a bold initiative of the Government of
                Gujarat to realize this priority. The Government is creating a
                sprawling center at Ahmedabad which aims to provide a perfect
                blend of education and entertainment. It will showcase
                contemporary and imaginative exhibits, minds on experiences,
                working models, virtual reality, activity corners, labs and live
                demonstrations to provide an understanding of science and
                technology to the common man
              </p>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={venue} className="w-100 br-20" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
