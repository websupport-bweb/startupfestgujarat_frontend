import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const sponsors = [
  { url: require('../assets/img/startup-1.png'), heading: "Sponsor 1" },
  { url: require('../assets/img/vanilla.png'), heading: "Sponsor 2" },
  { url: require('../assets/img/zippit.png'), heading: "Sponsor 3" },
  { url: require('../assets/img/def.png'), heading: "Sponsor 4" },
  { url: require('../assets/img/rogue.png'), heading: "Sponsor 5" },
  { url: require('../assets/img/mirchi.png'), heading: "Sponsor 6" },
  { url: require('../assets/img/swarnim.png'), heading: "Sponsor 7" },
  { url: require('../assets/img/gallops.png'), heading: "Sponsor 8" },
  { url: require('../assets/img/chitra.png'), heading: "Sponsor 9" },
  { url: require('../assets/img/insight.png'), heading: "Sponsor 10" },
  { url: require('../assets/img/swen.png'), heading: "Sponsor 11" },
  { url: require('../assets/img/inocen.png'), heading: "Sponsor 12" },
  { url: require('../assets/img/gyanjyot.png'), heading: "Sponsor 13" },
  { url: require('../assets/img/drona.png'), heading: "Sponsor 14" },
  { url: require('../assets/img/heritage.png'), heading: "Sponsor 15" },
  { url: require('../assets/img/amdavad.png'), heading: "Sponsor 16" },
  { url: require('../assets/img/gyani.png'), heading: "Sponsor 17" },
  { url: require('../assets/img/media.png'), heading: "Sponsor 18" },
  { url: require('../assets/img/startup.png'), heading: "Sponsor 19" },
  { url: require('../assets/img/ssip.png'), heading: "Sponsor 20" },
  { url: require('../assets/img/event.png'), heading: "Sponsor 21" },
  { url: require('../assets/img/swargam.png'), heading: "Sponsor 22" },
];

const Sponser = () => {
  return (
    <>
      <section className="banner-img-top">
        <Row className="m-0 p-0">
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img src={require('../assets/img/startup-banner.jpg')} className="w-100" alt="Responsive Banner" />
            </div>
          </Col>
        </Row>
      </section>

      {/* Sponsors Section */}
      <section className="register-bg">
        <Container className="register-bg py-5">
          <h2 className="title mb-4">Sponsors</h2>
          <Row className="m-0 p-0">
            {sponsors.map((sponsor, index) => (
              <Col lg="4" xs={6} key={index}>
                <div className="p-relative">
                  <img src={sponsor.url} className="w-100" alt={sponsor.heading} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sponser;
