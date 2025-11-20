import React from 'react'
import logo from '../assets/img/footer-logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MdLocationPin } from "react-icons/md";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={3} sm={12} xs={12}>
                   <div className="f-logo">
                   <div className='footer-logo'>
                        <img src={logo}/>
                    </div>
                    {/* <p className='footer-text'>
                    Clarity gives you the blocks and components you need to create a truly professional website.
                    </p> */}
                    
                   </div>
                </Col>

                <Col lg={2} sm={3} xs={3}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Company</h4>
                    </div>
                    <ul className="footer-list">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/participants">Participate</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    </div>
                </Col>

                <Col lg={2} sm={3} xs={3}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Fest</h4>
                    </div>
                    <ul className="footer-list">
                        <li><Link to="/startup">Exhibitor</Link></li>
                        <li><Link to="/startup">Sponsor</Link></li>
                        <li><Link to="/startup">Investor</Link></li>
                        <li><Link to="/startup">Visitor</Link></li>
                    </ul>
                    </div>
                </Col>

                <Col lg={5} sm={6} xs={6}>
                    <div className="footer-cols">
                    <div className='footer-title'>
                        <h4>Startup Revolution</h4>
                    </div>
                    <ul className="footer-list flex">
                        <li><img src={clock} width={45} /><span>10:00 AM TO 07:00 PM</span></li>
                        <li><img src={caleder} width={45} /><span>13 & 14 December, 2025</span></li>
                            <li><MdLocationPin /><span>Gujarat University Atal Kalam Building,
                            Ahmedabad</span></li>
                    </ul>
                    </div>
                </Col>
            </Row>
            <hr/>
            <Row className="copyright">
                <Col lg={12}>
                <p className='mb-0'>© Copyright 2025, All Rights Reserved by <Link to="/">Startup Fest</Link></p>
                </Col>
            </Row>
        </Container>
      
    </footer>
  )
}
