import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from 'axios';
import { IoIosArrowRoundDown } from "react-icons/io";
// import video from "../assets/img/video-img.png";
import video from "../assets/img/video-thumb.png";
// import video from "../assets/img/video-home.png";
// import about from "../assets/img/about-img.png";
import about from "../assets/img/homePic1.JPG";

import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

import { FaRegCheckCircle } from "react-icons/fa";
// import mainBanner from "../assets/img/home-banner.png";
import mainBanner from "../assets/img/banner-1.png";
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
import Testimonial from "./Testimonial";

export default function Home() {
  const [mediaData, setMediaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxTitle, setLightboxTitle] = useState('');
  const handleScroll = () => {
    window.scrollTo({
      top: document.getElementById("target-section").offsetTop,
      behavior: "smooth",
    });
  };

  // Fetch media and recognition data
  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/mediaAndRecognition`);
        setMediaData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching media data:', error);
        setLoading(false);
      }
    };

    fetchMediaData();
  }, []);

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

  // Dynamic media settings based on available items
  const getMediaSettings = () => {
    const itemCount = mediaData.length;
    const slidesToShow = Math.min(itemCount, 3); // Show max 3 or available items
    const slidesToScroll = Math.min(itemCount, 3);

    return {
      dots: itemCount > 1, // Only show dots if more than 1 item
      infinite: itemCount > 3, // Only infinite scroll if more than 3 items
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll,
      autoplay: itemCount > 1, // Only autoplay if more than 1 item
      speed: 500,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(itemCount, 2),
            slidesToScroll: Math.min(itemCount, 2),
            infinite: itemCount > 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: Math.min(itemCount, 2),
            slidesToScroll: Math.min(itemCount, 2),
            infinite: itemCount > 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: itemCount > 1,
          },
        },
      ],
    };
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLightboxClose = () => setLightboxShow(false);
  const handleLightboxShow = (image, title) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setLightboxShow(true);
  };

  const handleMediaCardClick = (item) => {
    if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else {
      handleLightboxShow(`${process.env.REACT_APP_URL}/${item.image}`, item.title);
    }
  };

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


  const gallery2 = [
    { url: require("../assets/img/sponsor2/logo1.png") },
    { url: require("../assets/img/sponsor2/logo2.png") },
    { url: require("../assets/img/sponsor2/logo3.png") },
    { url: require("../assets/img/sponsor2/logo4.png") },
    { url: require("../assets/img/sponsor2/logo5.png") },
    { url: require("../assets/img/sponsor2/logo6.png") },
    { url: require("../assets/img/sponsor2/logo7.png") },
    { url: require("../assets/img/sponsor2/logo8.png") },
    { url: require("../assets/img/sponsor2/logo9.png") },
    // { url: require("../assets/img/sponsor2/logo11.png") },
    { url: require("../assets/img/sponsor2/logo12.png") },
    { url: require("../assets/img/sponsor2/logo13.jpg") },
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
        {/* <Container> */}
          <Row className="justify-content-center">
            <Col lg={12} className="m-0 p-0">
              <img src={mainBanner} className="w-100" />
            </Col>

          </Row>
        {/* </Container> */}
      </section>

      {/* <section className="hero-banner" id="target-section" style={{
        backgroundImage: `url(${mainBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // minHeight: '100vh',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgb(0 0 0 / 47%)',
          zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <Row className="m-0 px-5 justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Col md={8}>
              <h1 className="text-white display-3 fw-bold mb-4 text-left">
                Transforming Ideas Into Lasting Impact : <span style={{ color: '#c39649' }}>Season 2</span>
              </h1>
              <h4 className="text-white fw-bold mb-4 text-left">Empowering Tomorrow’s Bharat </h4>
              <h4 className="text-white fw-bold mb-4 text-left">Join Us on December 13 & 14, 2025 </h4>
            </Col>
            <Col md={4} >
              <div className="d-grid gap-3" style={{ justifyContent: 'center' }}>
                <Link to="/register" className="theme-btn-2">
                  Visitor
                </Link>

                <Link to="/register" className="theme-btn-2">
                  Investor
                </Link>

                <Link to="/register" className="theme-btn-2">
                  Exhibitor
                </Link>
              </div>
            </Col>

          </Row>


        </div>
      </section> */}
      <section className="top-banner">
        <Container>
          <Row>
            <Col lg={4} md={5} sm={12} >
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

                {/* Lightbox Modal for Images */}
                <Modal
                  show={lightboxShow}
                  onHide={handleLightboxClose}
                  size="xl"
                  className="lightbox-modal"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{lightboxTitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center p-0">
                    <img
                      src={lightboxImage}
                      alt={lightboxTitle}
                      className="img-fluid w-100"
                      style={{ maxHeight: '80vh', objectFit: 'contain' }}
                    />
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
        <CardContent about={about} text={text} title="About StartUp Fest" buttonShow={true} to="/about" linkToTitle="Learn More" />


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
              <Col lg={6} xs={12} className="sfg order-lg-1 order-0" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <p className="font-blue">SFG 2025</p>
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
              <p className="font-blue">SFG 2025</p>
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
      <Testimonial />

      <section className="padding-sec participant-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="title text-center">Sponsors of Season 2</h3>
            </Col>
            <Col lg={10}>
              <div>
                <Slider {...settings}>
                  {gallery2.map((item, index) => (
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
      <section className="padding-sec participant-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="title text-center">Sponsors of Season 1</h3>
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

      {mediaData.length > 0 && 
       <section className="padding-sec light-bg media-recognition-sec">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <h3 className="title text-center">Media & Recognition</h3>
            </Col>
            <Col lg={10}>
              {loading ? (
                <div className="text-center">
                  <p>Loading...</p>
                </div>
              ) : mediaData.length > 0 ? (
                <div>
                  {mediaData.length === 1 ? (
                    // Single item - no slider needed
                    <Row className="justify-content-center">
                      <Col lg={4} md={6} sm={8}>
                        <div className="media-card-wrapper">
                          <div
                            className="media-card clickable-card"
                            onClick={() => handleMediaCardClick(mediaData[0])}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="media-image">
                              <img
                                src={`${process.env.REACT_APP_URL}/${mediaData[0].image}`}
                                alt={mediaData[0].title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="media-content">
                              <h4 className="media-title">{mediaData[0].title}</h4>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ) : (
                    // Multiple items - use slider
                    <Slider {...getMediaSettings()}>
                      {mediaData.map((item, index) => (
                        <div className="media-card-wrapper" key={index}>
                          <div
                            className="media-card clickable-card"
                            onClick={() => handleMediaCardClick(item)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div className="media-image">
                              <img
                                src={`${process.env.REACT_APP_URL}/${item.image}`}
                                alt={item.title}
                                className="img-fluid"
                              />
                            </div>
                            <div className="media-content">
                              <h4 className="media-title">{item.title}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <p>No media content available</p>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>}

     

    </>
  );
}
