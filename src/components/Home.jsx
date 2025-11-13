import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosArrowRoundDown } from "react-icons/io";
// import video from "../assets/img/video-img.png";
import video from "../assets/img/video-thumb.png";
// import video from "../assets/img/video-home.png";
// import about from "../assets/img/about-img.png";
import about from "../assets/img/homePic1.JPG";

import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";
// import mainBanner from "../assets/img/home-banner.png";
import mainBanner from "../assets/img/home2024.png";
import img2 from "../assets/img/img-2.png";
import img3 from "../assets/img/img-3.png";
import parti1 from "../assets/img/client/1.jpg";
import parti2 from "../assets/img/client/2.jpg";
import parti3 from "../assets/img/client/3.jpg";
import parti4 from "../assets/img/client/4.jpg";
import agry from "../assets/img/agry.png";
import food from "../assets/img/food.png";
import innov from "../assets/img/innov.png";
import fin from "../assets/img/fin.png";
import mobile from "../assets/img/mobile.png";
import edu from "../assets/img/edu.png";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import RegisterYourself from "./RegisterYourself";
import CardContent from "./CardContent";
import "../assets/css/style.css";
import { FiUsers, FiTrendingUp, FiBriefcase, FiUser } from "react-icons/fi";

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("target-section").offsetTop,
      behavior: "smooth",
    });
  };

  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Screen width less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // Screen width less than 768px
        settings: {
          slidesToShow: 3, // Show 2 slides
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480, // Screen width less than 480px
        settings: {
          slidesToShow: 2, // Show 1 slide
          slidesToScroll: 2,
        },
      },
    ],
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const gallery = [
    { url: require("../assets/img/Sponser logo/1.png") },
    { url: require("../assets/img/Sponser logo/2.png") },
    { url: require("../assets/img/Sponser logo/3.png") },
    { url: require("../assets/img/Sponser logo/4.png") },
    { url: require("../assets/img/Sponser logo/5.png") },
    { url: require("../assets/img/Sponser logo/6.png") },
    { url: require("../assets/img/Sponser logo/7.png") },
    { url: require("../assets/img/Sponser logo/8.png") },
    { url: require("../assets/img/Sponser logo/9.png") },
    { url: require("../assets/img/Sponser logo/11.png") },
    { url: require("../assets/img/Sponser logo/12.png") },
    { url: require("../assets/img/Sponser logo/13.png") },
    { url: require("../assets/img/Sponser logo/14.png") },
    { url: require("../assets/img/Sponser logo/15.png") },
    { url: require("../assets/img/Sponser logo/16.png") },
    { url: require("../assets/img/Sponser logo/17.png") },
    { url: require("../assets/img/Sponser logo/18.png") },
    { url: require("../assets/img/Sponser logo/19.png") },
    { url: require("../assets/img/Sponser logo/20.png") },
    { url: require("../assets/img/Sponser logo/21.png") },
    { url: require("../assets/img/Sponser logo/22.png") },
    { url: require("../assets/img/Sponser logo/23.png") },
  ];

  const text = `<p class="para">
              Snehshilp Foundation's "Start-Up Fest Gujarat" highlights the thriving spirit of entrepreneurship and innovation in the region. Founded and driven by the visionary Mrs. Snehal Brahmbhatt, the event aims to fill the void in start-up support by providing a comprehensive platform for fresh ideas to flourish.
              </p>
              <p class="para">
              The annual event brings together start-ups, investors, and industry collaboration. Leaders for two days, creating an atmosphere of inspiration and fruitful collaboration.
              </p>`;

  return (
    <>
      <section className="" id="target-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <img src={mainBanner} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="top-banner">
        <Container>
          <Row>
            <Col lg={4} md={5} sm={12}>
              <div className=" p-relative">
                <img src={video} className="w-100" />
                <a onClick={handleShow} className="play-btn"></a>

                <Modal
                  show={show}
                  onHide={handleClose}
                  size="xl"
                  className="video-modal"
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <iframe
                      width="100%"
                      height="450"
                      src="https://www.youtube.com/embed/kKACoyYyHpg"
                      title="Startup Fest 2023"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </Modal.Body>
                </Modal>
              </div>
            </Col>
            <Col lg={8} md={7} sm={12}>
              <div className="">
                <h5 className="subheading banner">
                  Connecting Innovators and Investors.
                </h5>
                <h3 className="banner-text">
                  Join the Junction of Vision and Opportunity at
                  <span className="gradient">Startup Fest</span> Gujarat!
                </h3>
              </div>
              <div className="banner-btns left">
                <Link to="/register" className="theme-btn">
                  Register Now
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec light-bg about-sec">
        <CardContent
          about={about}
          text={text}
          title="About StartUp Fest"
          buttonShow={true}
          to="/about"
          linkToTitle="Learn More"
        />
      </section>

      <section className="padding-sec">
        <Timer />
      </section>

      <div className="container-bg">
        <RegisterYourself />
      </div>

      <section className="padding-sec">
        <div
          className="stats-bg">
          <Container>
            <Row>
              <Col>
                <h3 className="title mb-5 text-center">
                  Empowering India’s{" "}
                  <span className="title-gradient">Startup Ecosystem</span>
                </h3>
              </Col>
            </Row>

            <Row>
              {/* Left: Stats Cards */}
              <Col lg={6} xs={12} className="order-lg-0 order-1">
                <Row>
                  {[
                    {
                      value: "1000+",
                      label: "Participants",
                      icon: <FiUsers size={32} color="#d28b2a" />,
                    },
                    {
                      value: "200+",
                      label: "Startups",
                      icon: <FiTrendingUp size={32} color="#4a85e6" />,
                    },
                    {
                      value: "135+",
                      label: "Investors",
                      icon: <FiBriefcase size={32} color="#8b6de0" />,
                    },
                    {
                      value: "15000+",
                      label: "Visitors",
                      icon: <FiUser size={32} color="#3bb5a1" />,
                    },
                  ].map((card, index) => (
                    <Col lg={5} xs={6} key={index} className="mb-4">
                      <div className="stat-card">
                        <div className="icon-wrap">{card.icon}</div>
                        <p className="stat-value">{card.value}</p>
                        <h4 className="stat-label">{card.label}</h4>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>

              {/* Right: SFG Text */}
              <Col lg={6} xs={12} className="sfg order-lg-1 order-0">
                <p className="font-blue">SFG 2024</p>
                <h3 className="title">
                  India Startup Revolution is Here and now! At Ahmedabad{" "}
                  <span className="title-gradient">December 13 & 14, 2025</span>
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row>
            <Col lg={6} md={12} xs={12} className="sfg ">
              <p className="font-blue">SFG 2024</p>
              <h3 className="title mb-5">
                Innovation at Bottom of the Pyramid in Rural Innovations and
                Entrepreneurship
              </h3>
            </Col>
            <Col lg={6} md={12} xs={12}>
              <Row className="text-center border-custom">
                <Col>
                  <img src={agry} />
                  <p className="fw-bold pt-3 font-blue "> Agri-Tech</p>
                </Col>
                <Col className="outer-border">
                  <img src={food} />
                  <p className="fw-bold pt-3 font-blue">Food- Tech</p>
                </Col>
                <Col>
                  <img src={innov} />
                  <p className="fw-bold pt-3 font-blue">Rural Innovation</p>
                </Col>
              </Row>
              <Row className="text-center">
                <Col className="pt-4">
                  <img src={fin} />
                  <p className="fw-bold pt-3 font-blue ">Fin-Tech</p>
                </Col>
                <Col className="outer-border pt-4">
                  <img src={mobile} />
                  <p className="fw-bold pt-3 font-blue">Rural Healthcare</p>
                </Col>
                <Col className="pt-4">
                  <img src={edu} />
                  <p className="fw-bold pt-3 font-blue">Edu-Tech</p>
                </Col>
              </Row>
              <Row>
                <div className="mt-4 text-center">
                  <p className="fw-bold pt-3 font-blue">Many More...</p>
                </div>
              </Row>
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
            <Col lg={12}>
              {/* <div className="banner-btns">
                <button className="theme-btn-light light-border">
                  Register Now
                </button>
              </div> */}
              <div className="banner-btns">
                <Link to="/register" className="theme-btn-light light-border">
                  Register Now
                </Link>
                {/* <button className="theme-btn-light" onClick={handleScroll}>
                  <IoIosArrowRoundDown /> Explore More
                </button> */}
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
                  {gallery.map((item, index) => (
                    <div className="adjust-height" key={index}>
                      <img
                        // key={index}
                        src={item.url}
                        alt={`Gallery Image ${index + 1}`}
                        className="img-fluid "
                      />
                    </div>
                  ))}
                  {/* <img src={parti1} alt="participant" />
                  <img src={parti2} alt="participant" />
                  <img src={parti3} alt="participant" />
                  <img src={parti4} alt="participant" /> */}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
