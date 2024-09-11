import React from "react";
import logo from "../assets/img/logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdLocationPin } from "react-icons/md";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <div className="header">
      <Navbar expand="lg" className="menubar">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="flex">
              <Navbar.Brand href="/" className="logo">
                <img src={logo} className="logo-header" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 navbar-item" navbarScroll>
                  <NavDropdown
                    title="2023 Highlights"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/">
                      2023 Highlights
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      2023 Speaker And Mentors
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      Shark Tank Featured Startups
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      Award Night
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      2023 Startup Showcase
                    </NavDropdown.Item>
                  </NavDropdown>
                  


                  <NavDropdown
                    title="Reasons To Participate"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/">
                      For Startups
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      For Investors And Accelerators 
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      For Sponsors
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="Info"
                    id="navbarScrollingDropdown"
                  >
                    <NavDropdown.Item href="/">
                      About Event
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/">
                      FAQ
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="/contact">Contact</Nav.Link>
                  <Nav.Link href="/sponser">Sponser</Nav.Link>
                  <Nav.Link href="/awards">Awards</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </div>
            </Col>
            <Col lg={5} className="text-end">
              <div className="menubar left">
                <ul className="navbar-item-left mr-3">
                  <li>
                    <a href="/">Sept 28-29,2024</a>
                  </li>
                  <li>
                    <a href="/">
                      <MdLocationPin />
                      Science City
                    </a>
                  </li>
                </ul>
                <button className="theme-btn">Register Now</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
      {/* <Container>
        <Row className="align-items-center">
          <Col lg={7}>
            <div className="menubar">
              <a href="/" className="logo">
                <img src={logo} className="logo-header" />
              </a>
              <ul className="navbar-item">
                <li>
                  <a href="/">2023 Highlights</a>
                </li>
                <li>
                  <a href="/">Reason to participate</a>
                </li>
                <li>
                  <a href="/">Info</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={5}>
            <div className="menubar left">
              <ul className="navbar-item-left mr-3">
                <li>
                  <a href="/">Sept 28-29,2024</a>
                </li>
                <li>
                  <a href="/">
                    <MdLocationPin />
                    Science City
                  </a>
                </li>
              </ul>
              <button className="theme-btn">Register Now</button>
            </div>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}
