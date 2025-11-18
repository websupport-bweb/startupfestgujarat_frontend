import React, { useEffect } from "react";
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
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const apiURL = process.env.REACT_APP_URL;

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
    <div className="padding-sec">
      <Container className="">
        <Row >
          <Col lg={7} xs={12}>
            <div className="padding-right">
              <h3 className="title">
                Get In Touch For Event Inquiries
              </h3>
              <h5 className="para text-gray mb-5">
                For any questions or inquiries about the event, please fill out
                the form below. Our team will be delighted to assist you.
                Contact us now and be a part of an extraordinary experience.
              </h5>
            </div>
            

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.54275011732!2d72.54009267509234!3d23.040555279161175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1763451642149!5m2!1sen!2sin"
                width="100%"
                height="250"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </Col>
          <Col lg={5}  xs={12}>
            <div className="">
                <form onSubmit={formik.handleSubmit} className="contact-sec">
                  <div className="mb-3">
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
                  <div className="text-center">
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
            </div>
          </Col>
        </Row>
      </Container>

      <section className="padding-sec">
      <Timer />
      </section>
    </div>
  );
}

export default Contact;
