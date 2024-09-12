import React from 'react'
import logo from '../assets/img/footer-logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLocationPin } from "react-icons/md";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";

export default function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={3} xs={12}>
                   <div className="f-logo">
                   <div className='footer-logo'>
                        <img src={logo}/>
                    </div>
                    <p className='footer-text'>
                    Clarity gives you the blocks and components you need to create a truly professional website.
                    </p>
                   </div>
                </Col>

                <Col lg={3} xs={3}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Company</h4>
                    </div>
                    <ul className="footer-list">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/participants">Participate</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                    </div>
                </Col>

                <Col lg={3} xs={3}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Fest</h4>
                    </div>
                    <ul className="footer-list">
                        <li><a href="/startup">Pitcher</a></li>
                        <li><a href="/startup">Start-Up</a></li>
                        <li><a href="/startup">Investor</a></li>
                        <li><a href="/startup">Visitor</a></li>
                    </ul>
                    </div>
                </Col>

                <Col lg={3} xs={6}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Startup Revolution</h4>
                    </div>
                    <ul className="footer-list flex">
                        <li><img src={clock} width={45} />10:00 AM TO 10:00 PM</li>
                        <li><img src={caleder} width={45} />28 & 29 Sep, 2024</li>
                        <li><MdLocationPin />Vigyan Bhavan, Science City,
                        Ahmedabad</li>
                    </ul>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row className="copyright">
                <Col lg={12}>
                <p className='mb-0'>© Copyright 2024, All Rights Reserved by <a href="/">Startup Fest</a></p>
                </Col>
            </Row>
        </Container>
      
    </footer>
  )
}
