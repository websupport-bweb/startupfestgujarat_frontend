import React from "react";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/pitcher-startup.jpg";
import cal from "../assets/img/calender.png";
import img1 from "../assets/img/shilp-icon.png";
import review from "../assets/img/reviews.png";
import rePurchase from "../assets/img/review-purchase.png";
import { CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiFlagPennantFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiFileCopyFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { PiCurrencyInr } from "react-icons/pi";
import about from "../assets/img/start-upImg.png";
import { Link } from "react-router-dom";


export default function StartupContent() {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
    setIsActive(true);
    window.getSelection().removeAllRanges(); // Clear the selection
    setTimeout(() => {
      setIsActive(false);
    }, 2500);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [map, setMap] = useState(false);

  const handleMap = () => setMap(!map);

  const [quantity, setQuantity] = useState(1)

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
                <h6 className="txt-blue mb-4">Saturday ,28 September</h6>
                {/* <button onClick={handleCopy}>
                  <CiStar />
                </button>
                <button onClick={handleCopy}>
                  <IoShareSocialOutline />
                </button> */}
              </div>
            </Col>
            <Col lg={3} className="text-end">
              {/* <button className="theme-btn" onClick={handleShow}> */}
              <Link to="/register" className="theme-btn">
                Get Ticket
              </Link>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="register-popup"
              >
                <Modal.Header>
                  <Modal.Title>
                    <img src={rePurchase} width="50" className="review-icn" />
                    <span>Review Purchase</span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h5>Friday AfterHours: Sufi Unplugged</h5>
                  <h6 className="txt-blue">Friday, September 13</h6>
                  <img src={banner} className="w-100" />
                  <div className="d-flex justify-content-between">
                    <h5 className="mt-3">Amount (₹) </h5>
                    <h5 className="mt-3">Quantity </h5>
                  </div>
                  <div className="input-num">
                    <div className="amt-input">
                      <input type="num" className="amount" placeholder="100" />
                      {/* <div className="rs-icon">
                  <PiCurrencyInr />
                  </div> */}
                    </div>
                    <div className="ince-btns">
                      <button
                        onClick={() => {
                          setQuantity((prevQuantity) => prevQuantity - 1);
                        }}
                        className="decrr"
                      >
                        <FaMinus />
                      </button>
                      <input
                        type="num"
                        className="text-center"
                        // placeholder="1"
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                        value={quantity}
                        min={0}
                      />
                      <button
                        onClick={() => {
                          setQuantity((prevQuantity) => prevQuantity + 1);
                        }}
                        className="incrr active"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                  <p className="desc-line">Sales end on September 28</p>

                  <hr />
                  <div className="total-amt">
                    <div className="flex">
                      <h6>Subtotal</h6>
                      <p>₹500.00</p>
                    </div>
                    <div className="flex">
                      <h6>Tax</h6>
                      <p>₹4.00</p>
                    </div>
                    <div className="flex">
                      <h6>
                        <b>Total</b>
                      </h6>
                      <p>
                        <b>₹504.00</b>
                      </p>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button className="theme-btn-light" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button className="theme-btn">Proceed to checkout</Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <h3 className="title w-sm">
                Start-Up Fest 2.0 Gujarat by Snehshilp Foundation
              </h3>
              <Row className=" ">
                <Col lg={8}>
                  
                  <div className="detail-right mt-3">
                    <h4>About Event</h4>
                    <p>
                      Join us for the second edition of Start-Up Fest Gujarat, a
                      day dedicated to empowering your business journey with
                      unparalleled knowledge, inspiration, and networking
                      opportunities. This event is crafted to uplift and
                      celebrate the dynamic community of small businesses,
                      providing you with key insights and connections to propel
                      your success.
                    </p>

                    <p>
                      At the Start-Up Fest Gujarat, you'll have the opportunity
                      to engage with industry-leading experts, influential
                      speakers, and fellow entrepreneurs who have thrived in the
                      small business arena. Dive deep into invaluable knowledge
                      through keynote presentations, interactive workshops, and
                      panel discussions on a wide array of topics, including
                      marketing strategies, finance and funding, digital
                      transformation, customer experience, and more.
                    </p>

                    {/* <h6>Tickets are priced at INR 450 + GST. </h6> */}
                    <p>
                      Our exhibition hall will be a hub of innovation,
                      showcasing products and services specifically designed to
                      cater to the needs of small businesses. Connect with
                      exhibitors and discover cutting-edge solutions that can
                      streamline your operations, enhance productivity, and
                      drive growth. Explore the latest technological
                      advancements, software applications, marketing tools, and
                      financial services that can revolutionize your business.
                    </p>

                   
                    <p>
                      Whether you're an established business owner or just
                      beginning your entrepreneurial journey, the Small Business
                      Expo is an essential event to fuel your ambitions. Mark
                      your calendars, gather your business cards, and prepare to
                      immerse yourself in a day of inspiration, education, and
                      growth. Don't miss this chance to connect with the
                      brightest minds in the industry and unlock the full
                      potential of your small business.
                    </p>
                    <p>
                    Join us at the Start-Up Fest Gujarat 2.0 and take a monumental step towards realizing your entrepreneurial dreams!
                    </p>
                    <h6>Refund Policy </h6>
                    <p>
                    Once registration is confirmed, the fee is non-refundable, IF THE EVENT IS CANCELLED DUE TO ANY UNFORESEEN CIRCUMSTANCES BEYOND THE CONTROL OF THE ORGANIZERS, THE REGISTRATION FEE PAID BY YOU FOR PARTICIPATION WILL BE ADJUSTED TOWARDS YOUR PARTICIPATION ON A NEW DATE. IN THE EVENT OF YOU BEING UNABLE TO PARTICIPATE ON THE NEW DATE, YOU WILL NOT BE ELIGIBLE FOR A REFUND. 
                    </p>
                    <h6>Tickets </h6>
                    <p>
                    Tickets for Start-Up Fest 2.0 Gujarat by Snehshilp Foundation can be booked here.
                    </p>

                    {/* <button className="theme-btn" onClick={handleShow}> */}
                    <Link className="theme-btn" to="/register">
                      Get Ticket
                    </Link>
                  </div>

                  {/* <div className="tags">
                    <h4>Tags</h4>
                    <p>
                      <button className="square">Performance</button>
                      <button className="round">Music</button>
                      <button className="round">Art</button>
                    </p>

                    <p className="big-btns">
                      <button className="square">
                        <FaPlus />
                        Add to curated list
                      </button>
                      <button className="square">
                        <PiFlagPennantFill />
                        Report this event
                      </button>
                    </p>
                  </div> */}
                </Col>
                <Col lg={4}>
                  <Row className="mt-4">
                    <Col lg={12}>
                      <div className="box-content">
                        <h6 className="box-title">Date and Time</h6>
                        <div className="detail">
                          {/* <SlCalender /> */}
                          <img src={cal} />
                          <div className="txt">
                            <div className="details-sec">
                              <h6> 28 September, 2024</h6>
                              <p>
                                Sat Sep 28 2024 at 09:00 am to Sun Sep 29 2024
                                at 11:00 pm (GMT+05:30)
                              </p>
                            </div>
                            {/* <a href="/">Add to calendar</a> */}
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="box-content">
                        <h6 className="box-title">Location</h6>
                        <div className="detail">
                          <MdLocationPin />
                          <div className="txt">
                            <div className="details-sec">
                              <h6> Vigyan Bhawan Science City </h6>
                              <p>
                              Vigyan Bhawan Science City, 3FGW+XXW, Divine Rd, Sola, Ahmedabad, Gujarat 380060, India
                              </p>
                            </div>
                            <a onClick={handleMap}>Show Map</a>
                            <span>
                              <IoIosArrowDown />
                            </span>
                          </div>
                        </div>
                        <div className="iframe-map">
                    {map && (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3086.551930808391!2d72.4961889187413!3d23.076971500290245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dd1d3d9cd79%3A0xe620538d49e61b0b!2sVigyan%20Bhawan%20Science%20City!5e0!3m2!1sen!2sus!4v1726029670292!5m2!1sen!2sus"
                        width="100%"
                        height="200"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )}
                  </div>
                      </div>
                    </Col>

                    <Col lg={12}>
                      <div className="box-content third">
                        <h6 className="box-title">Hosted By</h6>
                        <div className="detail">
                          <img src={img1} className="no-bg" />
                          <div className="txt">
                            <div className="details-sec">
                              <h6>Snehshilp Foundation</h6>
                            </div>

                            {/* <div className="btns">
                              <button className="theme-btn">Follow</button>
                              <button className="theme-btn-light">
                                Contact
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                {/* <Col lg={4}>
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
                            <button>
                              <FaTwitter />
                            </button>
                            <button>
                              <FaFacebookF />
                            </button>
                            <button>
                              <FaInstagram />
                            </button>
                            <button>
                              <FaGithub />
                            </button>
                          </div>
                        </div>

                        <div class="copy-text">
                          <input
                            ref={inputRef}
                            type="text"
                            class="text"
                            value="https://startupfest.barodaweb.org/startup"
                            readOnly
                          />
                          <button onClick={handleCopy}>
                            <RiFileCopyFill />
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Container>

        {/* <section className="padding-sec">
          <Container>
            <Row className="justify-content-center">
              <Col lg={6} className="">
                <h3 className="title">Register Yourself As StartUp</h3>
                <p className="para">
                  People who register for the Start-Up Fest will be allotted a
                  5-minute time slot to present their startup in front of
                  potential investors.
                </p>

                <p className="para">
                  Startups/ franchises will get a 2/2 stall and visibility in
                  front of all the investors coming in.
                </p>

                <div className="mt-5">
                  <Link to="/register" className="theme-btn">
                    Register Now
                  </Link>
                </div>
              </Col>
              <Col lg="5" className="offset-lg-1">
                <img src={about} className="w-100 pb-4" />
              </Col>
            </Row>
          </Container>
        </section> */}
      </div>
    </div>
  );
}
