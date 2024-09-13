import React, { useEffect, useState } from 'react';
import { Col, Row, Accordion, Card, Container } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';

function Faq() {
  const [faq, setFaq] = useState([])
  const fetchFaq = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list/FaqMaster`)
      console.log(res.data)

      setFaq(res.data);
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {

    fetchFaq()

  }, [])

  return (
    <>
      <section className='padding-sec'>
        <Container>
        <Row className='justify-content-center'>
          <Col lg={12} xs={12}>
          <h2 className='title text-center'>
            Frequently asked questions
          </h2>

          <p className="para text-center">
            Everything you need to know about the Event
          </p>
          </Col>

          <Col lg={9} xs={12} className="p-0">
            <div className="p-relative">
              <Accordion defaultActiveKey="0" >
                {faq && (
                  <>
                    {faq.map((item, index) => (
                      // Your JSX for each item goes here
                      <div key={index}>
                        {/* Render the content of each item here */}
                        <Accordion.Item eventKey={index}>
                  <Accordion.Header>{item.que}</Accordion.Header>
                  <Accordion.Body>
                    {item.ans}
                  </Accordion.Body>
                </Accordion.Item>
                      </div>
                    ))}
                  </>
                )}

               
                

              </Accordion>
            </div>
          </Col>
        </Row>
        </Container>
      </section>
      <br /><br /><br />
    </>
  );
}

export default Faq;
