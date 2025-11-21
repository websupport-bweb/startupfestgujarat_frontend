import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Container, Row } from "react-bootstrap";
import Timer from "../components/Timer";

function Contact() {
  const sectionRef = useRef(null);
  const apiURL = process.env.REACT_APP_URL;

  // ⭐ Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ⭐ SCROLL ANIMATION OBSERVER
  useEffect(() => {
    if (!sectionRef.current) return;

    const sec = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sec.classList.add("contact-active");
        else sec.classList.remove("contact-active");
      },
      { threshold: 0.2 }
    );

    observer.observe(sec);
    return () => observer.disconnect();
  }, []);

  // ⭐ FORM LOGIC
  const formik = useFormik({
    initialValues: {
      contactPersonName: "",
      email: "",
      number: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      contactPersonName: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      number: Yup.string()
        .required("Phone number is required")
        .matches(/^\d+$/, "Digits only")
        .min(10, "Minimum 10 digits"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm, setSubmitting, setErrors }) => {
      setSubmitting(true);
      try {
        const res = await axios.post(`${apiURL}/api/auth/contact`, values);
        if (res.status === 200) {
          alert("Form submitted successfully!");
          resetForm();
        }
      } catch (error) {
        setErrors({ submit: "Submission failed. Try again." });
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
<div
    className="padding-sec contact-anim-section"
    ref={sectionRef}
 
  >
      <Container>
        <Row>

          {/* LEFT SIDE → TEXT + MAP */}
          <Col lg={7} xs={12} className="fade-up">
            <div className="padding-right">
              <h3 className="title">Get In Touch For Event Inquiries</h3>
              <h5 className="para text-gray mb-5">
                For any questions about the event, please fill out the form.
                Our team will be happy to assist you.
              </h5>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.54275011732!2d72.54009267509234!3d23.040555279161175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84ead1103329%3A0x1a907f7fee8b2b7f!2sGujarat%20University!5e0!3m2!1sen!2sin!4v1763451642149!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
              allowFullScreen
              className="slide-left"
            ></iframe>
          </Col>

          {/* RIGHT SIDE → FORM */}
          <Col lg={5} xs={12} className="slide-right">
            <form onSubmit={formik.handleSubmit} className="contact-sec">
              
              <div className="mb-3">
                <label className="f-13 fw-bold">Name *</label>
                <input
                  type="text"
                  name="contactPersonName"
                  className="form-control bg-light"
                  placeholder="Your Name"
                  {...formik.getFieldProps("contactPersonName")}
                />
                {formik.touched.contactPersonName && formik.errors.contactPersonName && (
                  <div className="text-danger">{formik.errors.contactPersonName}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="f-13 fw-bold">Email *</label>
                <input
                  type="email"
                  name="email"
                  className="form-control bg-light"
                  placeholder="your@email.com"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="f-13 fw-bold">Phone Number *</label>
                <input
                  type="text"
                  name="number"
                  className="form-control bg-light"
                  placeholder="Phone Number"
                  {...formik.getFieldProps("number")}
                />
                {formik.touched.number && formik.errors.number && (
                  <div className="text-danger">{formik.errors.number}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="f-13 fw-bold">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control bg-light"
                  {...formik.getFieldProps("subject")}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-danger">{formik.errors.subject}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="f-13 fw-bold">Your Message (optional)</label>
                <textarea
                  name="message"
                  className="form-control bg-light"
                  style={{ height: 100 }}
                  placeholder="Your message..."
                  {...formik.getFieldProps("message")}
                />
              </div>

              {formik.errors.submit && (
                <div className="alert alert-danger">{formik.errors.submit}</div>
              )}

              <div className="text-center">
                <Button
  type="submit"
  className="mt-3 register-btn"
  disabled={formik.isSubmitting}
>
  {formik.isSubmitting ? "Submitting..." : "Submit"}
</Button>

              </div>
            </form>
          </Col>
        </Row>
      </Container>
<section 
  className="padding-sec"
  style={{ paddingBottom: "0px" }}
>
  <Timer />
</section>


      {/* ⭐ ANIMATION CSS */}
      <style>{`
        .contact-anim-section {
          opacity: 0;
          transform: translateY(40px);
          transition: 0.8s ease-out;
        }

        .contact-active {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.8s ease-out;
        }
        .contact-active .fade-up {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: 0.9s ease-out;
        }
        .contact-active .slide-left {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-right {
          opacity: 0;
          transform: translateX(40px);
          transition: 0.9s ease-out;
        }
        .contact-active .slide-right {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
}

export default Contact;
