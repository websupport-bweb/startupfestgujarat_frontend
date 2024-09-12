import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import clock from "../assets/img/clock-icon.png";
import caleder from "../assets/img/calender-icon.png";
import { MdLocationPin } from "react-icons/md";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TabContent } from "reactstrap";
import Timer from "../components/Timer";


function Contact() {
  const apiURL = process.env.REACT_APP_URL || "http://localhost:5000";

  // Formik initial values and validation schema
  const formik = useFormik({
    initialValues: {
      contactPersonName: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      contactPersonName: Yup.string()
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      number: Yup.string()
        .required("Phone number is required")
        .matches(/^\d+$/, "Phone number must be digits only")
        .min(10, "Phone number must be at least 10 digits"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const response = await axios.post(`${apiURL}/api/auth/contact`, values);
        if (response.status === 200) {
          alert("Form submitted successfully!");
          resetForm();
        }
      } catch (error) {
        setErrors({ submit: "Error submitting the form. Please try again later." });
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Container className="">
        <Row style={{ overflow: "hidden" }}>
          <Col lg={6}>
            <div className="">
              <h3 className="title mt-4 mb-1 pt-4">
                Get In Touch For Event Inquiries
              </h3>
              <h5 className="para-custom">
                For any questions or inquiries about the event, please fill out
                the form below. Our team will be delighted to assist you.
                Contact us now and be a part of an extraordinary experience.
              </h5>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3086.551930808391!2d72.4961889187413!3d23.076971500290245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9dd1d3d9cd79%3A0xe620538d49e61b0b!2sVigyan%20Bhawan%20Science%20City!5e0!3m2!1sen!2sus!4v1726029670292!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
          <Col lg={6}>
            <div className="">
              <TabContent>
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3 mt-5">
                    <label className="f-13 fw-bold" htmlFor="contactPersonName">
                      Name<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPersonName"
                      className="form-control bg-light"
                      placeholder="Your Name"
                      value={formik.values.contactPersonName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.contactPersonName &&
                    formik.errors.contactPersonName ? (
                      <div className="text-danger">
                        {formik.errors.contactPersonName}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="email">
                      Email<span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light"
                      placeholder="Your@company.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="number">
                      Phone number<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="number"
                      className="form-control bg-light"
                      placeholder="Phone number"
                      value={formik.values.number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.number && formik.errors.number ? (
                      <div className="text-danger">{formik.errors.number}</div>
                    ) : null}
                  </div>
                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="subject">
                      Subject<span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control bg-light"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.subject && formik.errors.subject ? (
                      <div className="text-danger">{formik.errors.subject}</div>
                    ) : null}
                  </div>

                  <div className="mb-3">
                    <label className="f-13 fw-bold" htmlFor="message">
                      Your Message <span>(optional)</span>
                    </label>
                    <textarea
                      name="message"
                      className="form-control bg-light"
                      style={{ height: 100 }}
                      placeholder="Tell us a little more..."
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  {formik.errors.submit && (
                    <div className="alert alert-danger">
                      {formik.errors.submit}
                    </div>
                  )}
                  <div>
                    <Button
                      type="submit"
                      color="primary"
                      className="mt-3 register-btn"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </TabContent>
            </div>
          </Col>
        </Row>
      </Container>

      <section className="padding-sec">
        <Container>
          <Row className="count-box">
            <Col lg={6} xs={12}>
              <h3 className="title mb-5">
                India <span className="gradient">Startup Revolution </span> is
                here and now!
              </h3>

              <Row>
                <Col lg={4} xs={12}>
                  <div className="box">
                    <MdLocationPin />
                    <h4>Venue</h4>
                    <p>Vigyan Bhavanm, Science City, Ahmedabad.</p>
                  </div>
                </Col>
                <Col lg={4} xs={12}>
                  <div className="box">
                    {/* <SlCalender /> */}
                    <img src={caleder} width={45} />
                    <h4>Date</h4>
                    <p>28 & 29 September, 2024</p>
                  </div>
                </Col>
                <Col lg={4} xs={12}>
                  <div className="box">
                    <img src={clock} width={45} />
                    <h4>Time</h4>
                    <p>10:00 AM TO 10:00 PM</p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
             <Timer />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;
