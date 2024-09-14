import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const StartUpShowCase = () => {
  return (
    <div className="padding-sec">
      <Container>
        <div className="soon">
          2023 Startup Showcase
          {/* <h6 className="title">
            Concurrent streams of pitching sessions Elevator pitch
          </h6> */}
        </div>
      
        <Row className="container-bg rounded-5 p-4 justify-content-between list-names">
          <Col lg={3} sm={12}>
            <ul className="flex-list text-gray">
              <li>Pathshala</li>
              <li>CHPL</li>
              <li>Tumpudi Automotive</li>
              <li>TRI-OM</li>
              <li>MLeads</li>
              <li>Bellacraze</li>
              <li>Infitron</li>
              <li>Agrionn</li>
              <li>Nikol EV</li>
              <li>RK Cinematic</li>
            </ul>
          </Col>
          <Col lg={3} sm={12}>
            <Row>
              <Col lg={12} sm={12}>
                <ul className="flex-list text-gray">
                  <li>Shri Marut (SMEA)</li>
                  <li>Yolo</li>
                  <li>New Hope Industries</li>
                  <li>M-Glads</li>
                  <li>Tripster</li>
                  <li>Gullfoss</li>
                  <li>Wind Water</li>
                  <li>Smart Fuel Monitering System</li>
                  <li>Growio</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={3} sm={12}>
            <Row>
              <Col lg={12} sm={12}>
                <ul className="flex-list text-gray">
                  <li>The phoner</li>
                  <li>OJCB (MJO Mega)</li>
                  <li>Smart FinDoc</li>
                  <li>Shivay Fire & Life Safety</li>
                  <li>Bhanujit MDCR</li>
                  <li>Aze Automobile</li>
                  <li>Dog Food</li>
                  <li>Erkey Motors India Pvt ltd</li>
                  <li>Petzzco</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={3} sm={12}>
            <Row>
              <Col lg={12} sm={12}>
                <ul className="flex-list text-gray">
                  <li>Marwix</li>
                  <li>VeleSolv</li>
                  <li>Greenevon</li>
                  <li>Ev expert</li>
                  <li>Agropreneurs</li>
                  <li>Zip.it</li>
                  <li>Kali-meditech</li>

                  <li>Dealwala</li>
                  <li>Delbird</li>
                  
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StartUpShowCase;
