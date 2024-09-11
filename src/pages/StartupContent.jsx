import React from 'react'
import { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import banner from "../assets/img/pitcher-startup.jpg"
import cal from "../assets/img/calender.png"
import img1 from "../assets/img/blockhead.png"
import review from "../assets/img/reviews.png"
import { CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { PiFlagPennantFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiFileCopyFill } from "react-icons/ri";



export default function StartupContent() {

  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand('copy');
    setIsActive(true);
    window.getSelection().removeAllRanges(); // Clear the selection
    setTimeout(() => {
      setIsActive(false);
    }, 2500);
  };


  // const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  return (
    <div className="gradeint-bg padding-sec startup-sec">
      <div className="banner">
        <Container>
          <Row>
            <Col lg={12}>
              <img src={banner} className="w-100 startup-banner" />
            </Col>
          </Row>

          <Row>
            <Col lg={9}>
              <div className="flex">
                <h6 className="txt-blue mb-4">Friday, September 13</h6>
                <CiStar />
                <IoShareSocialOutline />
              </div>
            </Col>
            <Col lg={3} className="text-end">
              <button className="theme-btn light-blue ">Register Now</button>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <h3 className="title">Friday AfterHours: Sufi Unplugged</h3>
              <Row className="mt-4">
                <Col lg={4}>
                  <div className="box-content">
                    <h6 className="box-title">Date and Time</h6>
                    <div className="detail">
                      {/* <SlCalender /> */}
                      <img src={cal} />
                      <div className="txt">
                        <div className="details-sec">
                          <h6> 13 September, 2024</h6>
                          <p>
                            Fri Sep 13 2024 at 07:30 pm to 09:30 pm (GMT+05:30)
                          </p>
                        </div>
                        <a href="/">Add to calendar</a>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="box-content">
                    <h6 className="box-title">Location</h6>
                    <div className="detail">
                      <MdLocationPin />
                      <div className="txt">
                        <div className="details-sec">
                          <h6> Blockheads - Plates & Playlists, </h6>
                          <p>
                            Ground Floor, ONE42, Billionaires Street, Ambli Rd,
                            Ashok Vatika, Ahmedabad, Gujarat 380058, India
                          </p>
                        </div>
                        <a href="/">Show Map </a>
                        <span>
                          <IoIosArrowDown />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={4}>
                  <div className="box-content">
                    <h6 className="box-title">Hosted By</h6>
                    <div className="detail">
                      <img src={img1} className="no-bg" />
                      <div className="txt">
                        <div className="details-sec">
                          <h6> blockheads vinyl cafe</h6>
                        </div>

                        <div className="btns">
                          <button className="theme-btn">Register Now</button>
                          <button className="theme-btn-light">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={12}>
              <Row className="mt-5 ">
                <Col lg={8}>
                  <div className="detail-right">
                    <h4>About Event</h4>
                    <p>
                      Get ready for a mesmerizing evening with "Sufi Unplugged"
                      at Blockheads featuring the incredible talent of Ayush!
                      Known for his magnetic stage presence and versatility
                      Ayush will take you on a soulful journey through Sufi
                      renditions classic Bollywood melodies and innovative
                      fusions. With over 1000 performances to his name Ayush’s
                      voice and artistry promise to enchant and captivate.
                    </p>

                    <p>
                      Join us for an intimate night filled with soulful music
                      that transcends time and genre. This is your chance to
                      experience Ayush's unique blend of sounds and witness his
                      creative journey firsthand.
                    </p>

                    <h6>Tickets are priced at INR 450 + GST. </h6>
                    <p>
                      Reserve your spot for an unforgettable musical experience!
                    </p>

                    <h6>Refund Policy </h6>
                    <p>
                      All ticket sales are final. No refunds will be issued for
                      this event.
                    </p>

                    <h6>Tickets </h6>
                    <p>
                      Tickets for Friday AfterHours: Sufi Unplugged can be
                      booked here
                    </p>

                    <button className="theme-btn">Register Now</button>
                  </div>

                  <div className="tags">
                    <h4>Tags</h4>
                    <p>
                      <button className="square">Performance</button>
                      <button className="round">Music</button>
                      <button className="round">Art</button>
                    </p>

                    <p className="big-btns">
                      <button className="square">
                        <FaPlus />
                        Add to curated list{" "}
                      </button>
                      <button className="square">
                        <PiFlagPennantFill />
                        Report this event
                      </button>
                    </p>
                  </div>
                </Col>

                <Col lg={4}>
                  <Row>
                    <Col lg={12}>
                      <div className="box-content reviews">
                        <div className="flex">
                          <h6 className="box-title">
                            Host reviews by attendees
                          </h6>
                          <div className="star">
                            <p className="mb-0">4.5</p>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                          </div>
                        </div>
                        <div className="detail">
                          <img src={review} />
                          <div className="txt">
                            <div className="details-sec">
                              <h6 className="mb-1"> Samantha Payne </h6>
                              <div className="star">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="comment">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit ut aliquam, purus sit amet luctus venenatis,
                          lectus magna fringilla urna
                        </p>
                        <a className="show-map" href="/">
                          View More
                        </a>
                        <span className="show">
                          <IoIosArrowDown />
                        </span>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div className="box-content reviews mt-3">
                        <div className="flex">
                          <h6 className="box-title">Share Event</h6>
                        </div>
                        <div className="detail">
                          <div className="social">
                            <button><FaTwitter /></button>
                            <button><FaFacebookF /></button>
                            <button><FaInstagram /></button>
                            <button><FaGithub /></button>
                          </div>
                        </div>

                        
                        <div class="copy-text">
                          <input
                          ref={inputRef}
                            type="text"
                            class="text"
                            value="https://allevents.in/ahmedabad/80001308636400"
                            readOnly 
                          />
                          <button onClick={handleCopy}>
                            <RiFileCopyFill/>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
