import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function RegisterYourself() {
  
  return (
    <section className="padding-sec">
      <Container>
        <Row className='align-items-center'>
          <Col lg={8} md={9} xs={6}>
            <h3 className="title">Register Yourself</h3>
          </Col>
          <Col lg={4} md={3} xs={6} className="text-end">
            <Link to="/register" className="theme-btn">
              Register Now
            </Link>
          </Col>
          <Col lg={6} xs={12}>
            <h5 className="para">
              People who register for the Start-Up Fest will be allotted a
              5-minute time slot to present their startup in front of
              potential investors.
            </h5>
          </Col>
          {/* <Col className="flex-shrink-0 text-end">
              <Link to="/register" className="theme-btn">Register Now</Link>
            </Col> */}
        </Row>
        <div class="justify-content-between row-margin row">
          <div class="col-lg-3 col-md-3 col-12">
            <a class="no-design card-link-wrapper" href="/register">
            <div class="col-card"><div class="name-line pitcher-card-div">
              <h3 class="card-title">Exhibitor</h3></div><p>Exhibitors will get a 3 by 3 stall and a chance to <span class="yellow-bg">present their project/idea/</span> startup on stage in front of all the investors.</p></div></a></div><div class="col-lg-3 col-md-3 col-12"><a class="no-design card-link-wrapper" href="/register"><div class="col-card"><div class="name-line pitcher-card-div"><h3 class="card-title">
          Visitor</h3></div>
              <p>
               Visitors get a chance to connect with exhibitors, explore innovative startups, and <span class="yellow-bg">discover new business opportunities
                  </span> across multiple industries.</p>
                </div></a></div><div class="col-lg-3 col-md-3 col-12">
                  <a class="no-design card-link-wrapper" href="/register"><div class="col-card">
                    <div class="name-line pitcher-card-div"><h3 class="card-title">Investors</h3>
                   
                     </div><p>Investors get access to all startups and an opportunity to <span class="yellow-bg">multiply their money by 2–3x.</span></p></div></a></div>
                     <div class="col-lg-3 col-md-3 col-12"><a class="no-design card-link-wrapper" href="/register">
                     <div class="col-card"><div class="name-line pitcher-card-div"><h3 class="card-title">
                      Sponsors</h3></div><p>Sponsors get <span class="yellow-bg">premier visibility and direct access</span> to high-growth founders &amp; capital-ready investors.</p></div></a></div></div>
      </Container>
    </section>

  );
}