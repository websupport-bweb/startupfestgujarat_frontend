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
    <footer className="py-5">
        <Container>
            <Row className="g-4">
                <Col lg={3} md={6} sm={12}>
                   <div className="f-logo">
                   <div className='footer-logo mb-3'>
                        <img src={logo} alt="Footer Logo" className="img-fluid" style={{ maxWidth: '180px' }} />
                    </div>
                    {/* <p className='footer-text'>
                    Clarity gives you the blocks and components you need to create a truly professional website.
                    </p> */}
                   </div>
                </Col>

                <Col lg={2} md={3} sm={6} xs={6}>
                    <div className="footer-cols">
                        <div className='footer-title mb-3'>
                            <h4 className="fw-semibold fs-5">Company</h4>
                        </div>
                        <ul className="footer-list list-unstyled">
                            <li className="mb-2"><Link to="/about" className="text-decoration-none">About Us</Link></li>
                            <li className="mb-2"><Link to="/participants" className="text-decoration-none">Participate</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-decoration-none">Contact Us</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col lg={2} md={3} sm={6} xs={6}>
                    <div className="footer-cols">
                        <div className='footer-title mb-3'>
                            <h4 className="fw-semibold fs-5">Fest</h4>
                        </div>
                        <ul className="footer-list list-unstyled">
                            <li className="mb-2"><Link to="/startup" className="text-decoration-none">Exhibitor</Link></li>
                            <li className="mb-2"><Link to="/startup" className="text-decoration-none">Sponsor</Link></li>
                            <li className="mb-2"><Link to="/startup" className="text-decoration-none">Investor</Link></li>
                            <li className="mb-2"><Link to="/startup" className="text-decoration-none">Visitor</Link></li>
                        </ul>
                    </div>
                </Col>

                <Col lg={5} md={12} sm={12}>
                    <div className="footer-cols">
                        <div className='footer-title mb-3'>
                            <h4 className="fw-semibold fs-5">Startup Revolution</h4>
                        </div>
                        <ul className="footer-list list-unstyled">
                            <li className="mb-3 d-flex align-items-start gap-2">
                                <img src={clock} width={40} height={40} alt="Clock" className="flex-shrink-0" />
                                <span className="d-inline-block pt-1">10:00 AM TO 07:00 PM</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                                <img src={caleder} width={40} height={40} alt="Calendar" className="flex-shrink-0" />
                                <span className="d-inline-block pt-1">13 & 14 December, 2025</span>
                            </li>
                            <li className="mb-3 d-flex align-items-start gap-2">
                                <MdLocationPin size={40} className="flex-shrink-0" style={{ minWidth: '40px' }} />
                                <span className="d-inline-block pt-1">Gujarat University Atal Kalam Building, Ahmedabad</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            
            <hr className="my-4"/>
            
            <Row className="copyright">
                <Col lg={12}>
                    <p className='mb-0 text-center text-md-start'>
                        © Copyright 2025, All Rights Reserved by <Link to="/" className="text-decoration-none">Startup Fest</Link>
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}