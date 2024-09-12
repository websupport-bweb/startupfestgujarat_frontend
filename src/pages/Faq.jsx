import React, { useEffect, useState } from 'react';
import { Col, Row, Accordion, Card } from 'react-bootstrap';
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
            Everything you need to know about the Event
          </p>

          <Col lg={12} className="p-0">
            <div className="p-relative">
              <Accordion defaultActiveKey="0" style={{ width: '60%', margin: 'auto' }}>
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
      </section>
      <br /><br /><br />
    </>
  );
}

export default Faq;
