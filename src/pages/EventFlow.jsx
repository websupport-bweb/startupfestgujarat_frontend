import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function EventFlow() {
    const flowImg = [
        { url: require('../assets/img/event-flow/EventFlow1.jpg') },
        { url: require('../assets/img/event-flow/EventFlow2.jpg') },
        { url: require('../assets/img/event-flow/EventFlow3.jpg') },
        { url: require('../assets/img/event-flow/EventFlow4.jpg') },
        { url: require('../assets/img/event-flow/EventFlow5.jpg') },
        { url: require('../assets/img/event-flow/EventFlow6.jpg') },
        { url: require('../assets/img/event-flow/EventFlow7.jpg') },
        { url: require('../assets/img/event-flow/EventFlow8.jpg') },
        { url: require('../assets/img/event-flow/EventFlow9.jpg') }
      ]
  return (
    <>
      
     <section className="padding-sec event-flow">

<Container>
  <Row>
  <h3 className="title mb-5 text-center" >
        {/* Event Flow! */}
        Comming Soon
      </h3>
      {/* {flowImg.map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
              <img
                // key={index}
                src={item.url}
                alt={`Event Flow Image ${index + 1}`}
              className="img-fluid w-100 mb-5 shadow"
              />
              </Col>
            ))}
     */}
    
   
  </Row>
</Container>
</section>

    </>
  )
}
