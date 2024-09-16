import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const StartUpShowCase = () => {
  const startupGroups = [
    [
      "Pathshala",
      "CHPL",
      "Tumpudi Automotive",
      "TRI-OM",
      "MLeads",
      "Bellacraze",
      "Infitron",
      "Agrionn",
      "Nikol EV",
      "RK Cinematic",
    ],
    [
      "Shri Marut (SMEA)",
      "Yolo",
      "New Hope Industries",
      "M-Glads",
      "Tripster",
      "Gullfoss",
      "Wind Water",
      "Smart Fuel Monitering System",
      "Growio",
      "The Phoner",
    ],
    [
      "OJCB (MJO Mega)",
      "Smart FinDoc",
      "Shivay Fire & Life Safety",
      "Bhanujit MDCR",
      "Aze Automobile",
      "Dog Food",
      "Erkey Motors India Pvt Ltd",
      "Petzzco",
      "Marwix",
      "VeleSolv", 
    ],
    [
      "Greenevon",
      "Ev Expert",
      "Agropreneurs",
      "Zip.it",
      "Kali-meditech",
      "Dealwala",
      "Delbird",
    ],
  ];

  return (
    <div className="padding-sec">
      <Container>
        <div className="title text-center mb-5">
          2023 Startup Showcase
          {/* <h6 className="title">
            Concurrent streams of pitching sessions Elevator pitch
          </h6> */}
        </div>

        <Row className="container-bg rounded-5 p-4 justify-content-between list-names">
          {startupGroups.map((group, index) => (
            <Col key={index} lg={3} sm={12}>
              <ul className="flex-list">
                {group.map((startup, i) => (
                  <li key={i}>{startup}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StartUpShowCase;
