import React , {useEffect} from 'react'
import { Col , Row ,Container } from 'react-bootstrap'
import img1 from "../assets/img/piyush-bansal.png"
import speaker1 from "../assets/img/speaker1.png"
import speaker2 from "../assets/img/speaker2.png"


export default function GuestSpeakers() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="padding-sec">
      <Container>
        <div className="">
          <h2 className='title'>Content Coming Soon...</h2>
         
          {/* <Row className="justify-content-center">
            <Col lg={9} sm={12}>
            <h2 className="title text-center">Our Esteemed Guest</h2>
              <div className="main-img">
                <img src={img1} className="w-100" />
              </div>
            </Col>
            <Col lg={9} sm={12}>
              <h2 className="title text-center pt-5 pb-3">Esteemed Speakers</h2>
              <Row className="g-4">
                <Col lg={6} md={6} sm={12}>
                  <div className="speaker-card">
                    <img src={speaker1} alt="" className="w-100" />
                    <div className="speaker-card-div">
                      <div>
                        <p className="mb-0">Raj Shamani</p>
                        <p className="mb-0 font-sm">
                        CO-Founder Figuring out & House of X
                    </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6}  md={6} sm={12}>
                  <div className="speaker-card">
                    <img src={speaker2} alt="" className="w-100" />
                    <div className="speaker-card-div">
                      <div>
                        <p className="mb-0">Dr Sudhir Gupta</p>
                        <p className="mb-0 font-sm">
                        Founder & CEO Startup Lanes
                    </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row> */}
        </div>
      </Container>
    </div>
  );
}
