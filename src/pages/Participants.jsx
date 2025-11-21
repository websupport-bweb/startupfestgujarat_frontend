import React , {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdLocationPin } from "react-icons/md";
import parti1 from "../assets/img/participants1.jpg";
import { Link } from "react-router-dom";
import Timer from "../components/Timer";
import { MdArrowOutward } from "react-icons/md";
import RegisterYourself from "../components/RegisterYourself";
import { FaArrowRightLong } from "react-icons/fa6";
import arrow from "../assets/img/hurry-arrow.png"

export default function Participants() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="padding-sec " >
        <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={5} lg={5}>
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
              <div className="mt-5">
                <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn">
                  Register Now
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={parti1} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="padding-sec bg-img2">
        <Container>

          <div className="justify-content-between">
            <div className="d-flex justify-content-center mb-4 ">
              <h3 className="title text-center">
                Grab Your Tickets
              </h3>
              <div className="">  <img src={arrow} alt="No img" /></div>

            </div>


            <Row>
              <Col lg={6}>

                <div className=' speaker-card bg-white'>
                  <h3 className="text-center pitcher-card-a heading">

                    Investor Pass

                  </h3>

                  <h3 className="text-center price-check">
                    ₹4,000
                  </h3>
                  {/* <h2 className="bg-yellow"> */}
                  <div className=" d-flex align-items-center justify-content-center "><h2 className="bg-yellow w-content">₹1,000 </h2></div>
                  {/* </h2> */}
                  <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer">
                    <div className='speaker-card-div d-flex'><h5 className='m-3 flex-grow-1 text-left text-decoration-none text-white' >Register Now</h5>
                      <FaArrowRightLong className="shrink-0 right-arrow" /> </div></a>
                </div>
              </Col>

              <Col lg={6}>

                <div className=' speaker-card bg-white'>
                  <h3 className="text-center pitcher-card-a heading">

                    Visitor Pass

                  </h3>

                  <h3 className="text-center price-check">
                    ₹1,000
                  </h3>
                  {/* <h2 className="bg-yellow"> */}
                  <div className=" d-flex align-items-center justify-content-center "><h2 className="bg-yellow w-content">₹100 </h2></div>
                  {/* </h2> */}

                  <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer">
                    <div className='speaker-card-div d-flex'><h5 className='m-3 flex-grow-1 text-left text-decoration-none text-white' >Register Now</h5>
                      <FaArrowRightLong className="shrink-0 right-arrow" /> </div></a>

                </div>
              </Col>

            </Row>


          </div>
        </Container>
      </section>

      <section className="padding-sec">
        <Container>
          <div className="justify-content-between">
            <h3 className="title text-center mb-mob">
            Exhibit Your Startup

            </h3>

            <Row className="justify-content-center">
              <Col lg={4} className="h-100  bg-white ">
                <div className="speaker-card2 mb-3 h-100 col-padding">
                  <h3 className="text-center fw-bolder pitcher-card-a heading">
                    Sliver
                  </h3>
                  <h3 className="text-center fw-bold font-blue">
                    ₹12,000
                  </h3>
                  <h3 className="text-center fs-4 mt-5">
                    2X2 Meter Stall
                  </h3>
                  <div className="min-h">
                  <p className="mt-5 color-lightgray">This package includes:</p>
                  <ul>
                    <li>Chair</li>
                    <li>1 Table</li>
                    <li>Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to Meeting Rooms and Investor Zone</li>
                    <li>Ideal for early stage startups looking for a cost-effective way to showcase their innovations and connect with potential investors.</li>

                  </ul>
                  </div>
                  <div className="mt-5 text-center">
                    <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="h-100  bg-white ">
                <div className="speaker-card2 mb-3 h-100 col-padding">
                  <h3 className="text-center fw-bolder pitcher-card-a heading">
                    Gold
                  </h3>
                  <h3 className="text-center fw-bold font-blue">
                    ₹30,000
                  </h3>
                  <h3 className="text-center fs-4 mt-5">
                    3x3 Meter Stall
                  </h3>
                  <div className="min-h">
                  <p className="mt-5 color-lightgray">This package includes:</p>
                  <ul>
                    <li>4 Chairs</li>
                    <li>Tables</li>
                    <li>4 Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to Meeting Rooms and Investor Zones</li>
                    <li>Opportunity to Pitch to Angel Investors and Sharks at the Main Stage (Terms and Conditions Apply)</li>
                    <li>Perfect for startups ready to make an impression and engage directly with investors, offering enhanced visibility and pitching opportunities.</li>

                  </ul></div>
                  <div className="mt-5 text-center">
                    <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="h-100  bg-white ">
                <div className="speaker-card2 mb-3 h-100 col-padding">
                  <h3 className="text-center pitcher-card-a heading">
                    Platinum
                  </h3>
                  <h3 className="text-center fw-bold font-blue">
                    ₹1,00,000
                  </h3>
                  <h3 className="text-center fs-4 mt-5">
                    Sponsorship Stall
                  </h3>
                  <div className="min-h">
                  <p className="mt-5 color-lightgray">This package includes:</p>
                  <ul>
                    <li>4 Chairs</li>
                    <li>Tables</li>
                    <li>6 Food Phases and Visitor Passes</li>
                    <li>Front Fascia Branding</li>
                    <li>Access to VIP Area, Meeting Rooms, and Investor Zones</li>
                    <li>Branding at the Venue (Logo placement in the backdrop and throughout the venue)</li>
                    <li>High Visibility Stall Location near the Main Stage, where VIPs and Investors will be seated</li>
                    <li>Direct Opportunity to Pitch to Angel Investors and Sharks</li>

                  </ul></div>
                  <div className="mt-5 text-center">
                    <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn">
                      Register Now
                    </a>
                  </div>
                </div>
              </Col>

            </Row>
          </div>
        </Container>
      </section>



      {/* <RegisterYourself /> */}

      {/* <section className="register-sec dark-bg padding-sec">
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
                <a href="http://register.startupfestgujarat.com/" target="_blank" rel="noopener noreferrer" className="theme-btn-light light-border">
                  Register Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* <section className="register-sec dark-bg padding-sec">
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
                <button className="theme-btn-light light-border">
                  Register Now
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
}
