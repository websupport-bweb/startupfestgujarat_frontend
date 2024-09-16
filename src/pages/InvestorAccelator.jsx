import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/invest-banner.png";
import img1 from "../assets/img/investor11.png";
import img2 from "../assets/img/investor2.jpg";
import a1 from "../assets/img/accelator1.jpg";
import img3 from "../assets/img/bg-img-invest.png";
import { Link } from 'react-router-dom';
import opp1 from "../assets/img/opp1.png";
import opp2 from "../assets/img/opp2.png";
import opp3 from "../assets/img/opp3.png";
import opp4 from "../assets/img/opp4.png";
import opp5 from "../assets/img/opp5.png";
import opp6 from "../assets/img/opp6.png";
import CardContent from '../components/CardContent';


export default function InvestorAccelator() {

  const text = `<p class="para">
              We’ve curated a range of opportunities specifically designed to connect you with the key players in the industry. Whether you're looking to meet with venture capitalists, incubators, angel investors, or industry leaders, Startup Fest Gujarat is your gateway to the connections you need to take your startup to the next level.
              </p>`


  const text2 = `<p class="para">
              At Startup Fest Gujarat, you'll encounter a diverse array of startups spanning multiple industries and
               growth stages, all eager to connect with investors, incubators, and mentors. From cutting-edge Fintech
                to innovative AI, and from early-stage ventures to those seeking Series A funding, this event is designed 
                to bring together companies across sectors, providing them with the opportunity to secure mentorship, networking,
                 and potential investment to drive their growth forward.
              </p>  `

  const opportunities = [
    { img: opp1, title: "Prestige Sessions" },
    { img: opp2, title: "Awards & Pitches" },
    { img: opp3, title: "Media Center" },
    { img: opp4, title: "Live Sessions" },
    { img: opp5, title: "Connect & Collaborate" },
    { img: opp6, title: "Networking Opportunities" },
  ];

  return (
    <>

      <section className="banner-img-top">
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img src={banner} className="w-100" alt="Responsive Image" />
            </div>
          </Col>
        </Row>
      </section>
      {/* <section className="breadcrumb-img">
        <img src={banner} className="w-100" />
      </section> */}

      <section className="padding-sec light-bg">
       

        <CardContent
          about={img1}
          text={text}
          title="Where Startups Meet Leading Investor"
          buttonShow={true}
          to="/register" linkToTitle="Register Now" />
      </section>
      <section className="register-sec padding-sec showcase">
        <Container>
          <img src={img3} />
          <div className="overlay padding-sec">
            <div className="w-70 m-auto content">
              <h5 className="title text-center text-white">
                I'm convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure perseverance.
              </h5>
              <h3>
                ~–Steve Jobs, Co-founder of Apple
              </h3>
            </div>

          </div>
        </Container>
      </section>
      <section className="padding-sec">
      

        <CardContent
          about={img2}
          text={text2}
          title="Engage with Leading Startups from Elite Programs"
          buttonShow={true}
          to="/register" linkToTitle="Register Now" />
      </section>

      <section>
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img
                src={a1}
                className="w-100 inner-banner"
                alt="Responsive Image"
              />
            </div>
          </Col>
        </Row>
      </section>

      <section className="padding-sec">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <h4 className="title">2023 Opportunities</h4>
              </div>
            </Col>
            {opportunities.map((opportunity, index) => (
              <Col lg={4} key={index}>
                <div className="box-opp">
                  <div className="img-opp">
                    <img src={opportunity.img} className="w-100" alt={opportunity.title} />
                  </div>
                  <div className="text-opp">
                    <h6>{opportunity.title}</h6>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
