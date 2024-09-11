import React from 'react';
import { Col, Row, Accordion, Card } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

function Faq() {
  return (
    <>
      <section>
        <Row className="m-0 p-0">
          <h2
            style={{
              fontWeight: 'bold',
              paddingTop: '40px',
              paddingBottom: '40px',
              textAlign: 'center',
            }}
          >
            Frequently asked questions
          </h2>

          <p className="para text-center">
            Everything you need to know about the product and billing.
          </p>

          <Col lg="12" className="p-0">
            <div className="p-relative">
              <Accordion defaultActiveKey="0" style={{width:'60%',margin:'auto'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Is there a free trial available?</Accordion.Header>
        <Accordion.Body>
         Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
30-minute onboarding call to get you up and running as soon as possible.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I change my plan later?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is your cancellation policy?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can other info be added to an invoice?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>

       <Accordion.Item eventKey="5">
        <Accordion.Header>How does billing work?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="6">
        <Accordion.Header>How do I change my account email?</Accordion.Header>
        <Accordion.Body>
          
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
            </div>
          </Col>
        </Row>
      </section>
      <br /><br /><br />
    </>
  );
}

export default Faq;
