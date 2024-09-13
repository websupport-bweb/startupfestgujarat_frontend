import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Timer =()=>{
  // State to store time remaining
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date for the event (28th August 2024 in local time)
  const targetDate = new Date('2024-09-28T00:00:00').getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime(); // Current time in milliseconds

      // Calculate the difference in milliseconds
      const difference = targetDate-now  ;

      // console.log("Current Time:", new Date(now).toLocaleString());
      // console.log("Target Date:", new Date(targetDate).toLocaleString());
      // console.log("Difference:", difference);

      if (difference > 0) {
        // Calculate days, hours, minutes, and seconds from the difference
        const time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
        setTimeLeft(time);
      } else {
        // If the countdown ends, set everything to zero
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    // Call the function immediately to set the initial state
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);


    return(
        
             <div className="counter-box">
        <Row>
          <Col lg={6} xs={6}>
            <div className="count border-right">
              <h3>{timeLeft.days}</h3>
              <h5 className="subtitle">Days</h5>
            </div>
          </Col>
          <Col lg={6} xs={6}>
            <div className="count">
              <h3>{timeLeft.hours}</h3>
              <h5 className="subtitle">Hours</h5>
            </div>
          </Col>
        </Row>
        <hr className="gradient-line" />
        <Row>
          <Col lg={6} xs={6}>
            <div className="count border-right">
              <h3>{timeLeft.minutes}</h3>
              <h5 className="subtitle">Minutes</h5>
            </div>
          </Col>
                <Col lg={6} xs={6}>
            <div className="count">
              <h3>{timeLeft.seconds}</h3>
              <h5 className="subtitle">Seconds</h5>
            </div>
          </Col>
        </Row>
      </div>
           
    )
    
}

export default Timer