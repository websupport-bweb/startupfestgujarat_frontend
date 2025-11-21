import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import img1 from "../assets/img/awards.png";
import SectionTitle from '../components/SectionTitle';

function Awardsnight() {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
  
      <section className="mt-10" style={{
    }}>
        <Row className="m-0 p-0">

           <SectionTitle title="Startup fest Award Night 2023" className="mb-12 md:mb-16 text-center" />
          <Col lg={12} className="p-0">
            <div className="p-relative">
              <img
                src={img1}
                className="w-100"
                style={{ objectFit: "cover", height: "auto" }}
                alt="Responsive Image"
              />
            </div>
          </Col>

          <div style={{marginTop:70}}>

          </div>
        </Row>
      </section>
    </>
  )
}

export default Awardsnight