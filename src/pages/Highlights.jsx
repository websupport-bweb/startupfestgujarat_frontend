import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../assets/img/about-img.png";
import bannerImg from "../assets/img/image 15image.png";
import { MdArrowOutward } from "react-icons/md";
import venue from "../assets/img/venue.png";
import { FaArrowDown } from "react-icons/fa6";
import auth1 from "../assets/img/shilp-icon.png";
import highbg from "../assets/img/highlights-bg.png";
import one from "../assets/img/event1.jpg";
import two from "../assets/img/event2.jpg";
import three from "../assets/img/event3.jpg";
import { Link } from "react-router-dom";
import CardContent from "../components/CardContent";

export default function Highlights() {
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
    cssEase: "linear",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const text = `<p class="para">
                Snehshilp foundation’s “start-up fest gujarat” highlights the
                thriving spirit of entrepreneurship and innovation in the
                region. Founded and driven by the visionary mrs. Snehal
                brahmbhatt, the event aims to fill the void in start-up support
                by providing a comprehensive platform for fresh ideas to
                flourish.
              </p>
              <p class="para">
                The annual event brings together start-ups, investors, and
                Industry collaboration.Leaders for two days, creating an
                Atmosphere of inspiration and fruitful collaboration.
              </p>`;

  const textScience = `
  <p class="para">
    Located off the Sarkhej Gandhinagar Highway, Science City is an ambitious initiative of the Government of Gujarat to trigger scientific curiosity in the minds of citizens through entertainment and experiential knowledge. Covering an area of more than 107 hectares, the objective is to create imaginative exhibits, virtual reality activity corners, and live demonstrations in an easily understandable manner.
  </p>
  <p class="para">
    Gujarat Science City is a bold initiative by the Government of Gujarat to realize this vision. The sprawling center in Ahmedabad aims to provide the perfect blend of education and entertainment. It showcases contemporary and imaginative exhibits, minds-on experiences, working models, virtual reality zones, activity corners, labs, and live demonstrations to make science and technology accessible to the common man. (Photo of Vigyan Bhavan)
  </p>
`;

  return (
    <>
      <section className="">
        <img src={bannerImg} className="w-100" />
      </section>

      <section className="padding-sec light-bg">
        <CardContent
          about={about}
          text={text}
          title="Startup Fest Gujarat: <br />
                Where Innovation Meets Investment"
          buttonShow={false}
        />
      </section>

      {/* <section className="padding-sec">
        <Container>
         
          <Row>
            <Col lg={12}>
              <div className="heading-one d-flex justify-content-between">
                <h4 className="title">Event Showcases</h4>
               
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
      </section> */}

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
        <CardContent
          about={venue}
          text={textScience}
          title="2023 Venue : Science City"
          buttonShow={false}
        />
      </section>
    </>
  );
}
