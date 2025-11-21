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
import highbg from "../assets/img/highlights-bg.png";
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
      <section className="overflow-hidden" >
        <img src={bannerImg} className="w-100" />
      </section>

      <section className="padding-sec light-bg overflow-hidden">
        <CardContent
          about={about}
          text={text}
          title="Startup Fest Gujarat:
                Where Innovation Meets Investment"
          buttonShow={false}
        />
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
      <section className="padding-sec overflow-x-hidden">
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
