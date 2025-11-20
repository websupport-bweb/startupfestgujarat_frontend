import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const sectionRef = useRef(null);

  const targetDate = new Date("2025-12-13T10:00:00").getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // ⭐ SCROLL ANIMATION TRIGGER
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("anim-active");
        } else {
          section.classList.remove("anim-active");
        }
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="timer-section"
      style={{
        position: "relative",
        padding: "80px 0",
        backgroundImage:
          "url('/vivid-blurred-colorful-wallpaper-background-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* WHITE OVERLAY */}
      <div className="overlay"></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="content-wrapper">

          <h2 className="title mb-5 text-center fade-item">
            India Startup Revolution is here and now!
          </h2>

          <Row className="justify-content-center">
            <Col lg={4} md={4} xs={12}>
              <div className="box text-center fade-item">
                <div className="timer-icon-wrapper">
                  <MdLocationPin className="timer-icon" />
                </div>
                <h4>Venue</h4>
                <p>Gujarat University Atal Kalam Building, Ahmedabad.</p>
              </div>
            </Col>

            <Col lg={4} md={4} xs={12}>
              <div className="box text-center fade-item delay-1">
                <div className="timer-icon-wrapper">
                  <img src={caleder} alt="Calendar" className="timer-icon-img" />
                </div>
                <h4>Date</h4>
                <p>13 & 14 December, 2025</p>
              </div>
            </Col>

            <Col lg={4} md={4} xs={12}>
              <div className="box text-center fade-item delay-2">
                <div className="timer-icon-wrapper">
                  <img src={clock} alt="Clock" className="timer-icon-img" />
                </div>
                <h4>Time</h4>
                <p>10:00 AM TO 07:00 PM</p>
              </div>
            </Col>
          </Row>

          {/* COUNTER */}
          <div className="counter-box fade-item delay-3">
            <Row>
              <Col lg={3} xs={6}>
                <div className="count border-right">
                  <h3>{timeLeft.days}</h3>
                  <h5 className="subtitle">Days</h5>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div className="count border-right">
                  <h3>{timeLeft.hours}</h3>
                  <h5 className="subtitle">Hours</h5>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div className="count border-right">
                  <h3>{timeLeft.minutes}</h3>
                  <h5 className="subtitle">Minutes</h5>
                </div>
              </Col>

              <Col lg={3} xs={6}>
                <div className="count">
                  <h3>{timeLeft.seconds}</h3>
                  <h5 className="subtitle">Seconds</h5>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Timer;
