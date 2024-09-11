import React , { useState }from "react";
import Slider from 'react-slick';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoIosArrowRoundDown } from "react-icons/io";
import video from "../assets/img/video-img.png";
import about from "../assets/img/about-img.png";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegCheckCircle } from "react-icons/fa";
import img1 from "../assets/img/img-1.png";
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
import bannerImg from "../assets/img/image 15image.png";
import { MdArrowOutward } from "react-icons/md";
import bhImg from "../assets/img/blockhead.png";
import event1 from "../assets/img/event1.png";
import event2 from "../assets/img/event2.png";
import event3 from "../assets/img/event3.png";
import { IoArrowDown } from "react-icons/io5";
import venue from "../assets/img/venue.png";


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
      <section className="top-banner">
        <img src={bannerImg} alt="" style={{ width: "100%" }} />
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <h3 className="title">
                Startup Fest Gujarat: Where Innovation Meets Investment
              </h3>
              <p className="para">
                SNEHSHILP FOUNDATION’S “START-UP FEST GUJARAT” HIGHLIGHTS THE
                THRIVING SPIRIT OF ENTREPRENEURSHIP AND INNOVATION IN THE
                REGION. FOUNDED AND DRIVEN BY THE VISIONARY MRS. SNEHAL
                BRAHMBHATT, THE EVENT AIMS TO FILL THE VOID IN START-UP SUPPORT
                BY PROVIDING A COMPREHENSIVE PLATFORM FOR FRESH IDEAS TO
                FLOURISH.
              </p>
              <p className="para">
                THE ANNUAL EVENT BRINGS TOGETHER START-UPS, INVESTORS, AND
                INDUSTRY COLLABORATION.LEADERS FOR TWO DAYS, CREATING AN
                ATMOSPHERE OF INSPIRATION AND FRUITFUL COLLABORATION.
              </p>
            </Col>
            <Col lg="6">
              <img src={about} className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="container-bg padding-sec">
        <Container>
          <Row className="d-flex">
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
                <h6>Blockheads vinyl cafe</h6>
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
                <h6>Blockheads vinyl cafe</h6>
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
                <h6>Blockheads vinyl cafe</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="register-sec dark-bg padding-sec bg-img">
        <Container>
          <div className="w-70 m-auto">
            <h3 className="title text-center text-white mb-0">
              It’s not about ideas.
            </h3>
            <h3 className="title text-center text-white">
              It’s about making ideas happen.
            </h3>
            <h3></h3>
            <h3 className="title text-center text-white">~ Scott Belsky</h3>
          </div>
        </Container>
      </section>

      <section className="padding-sec light-bg">
        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
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
            <Col lg="6">
              <img src={venue} className="w-100 br-20" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
