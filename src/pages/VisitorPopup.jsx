import React from "react";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import banner from "../assets/img/pitcher-startup.jpg";
import cal from "../assets/img/calender.png";
import img1 from "../assets/img/shilp-icon.png";
import imgEvent from "../assets/img/ticket-icon.png";
import review from "../assets/img/reviews.png";
import rePurchase from "../assets/img/review-purchase.png";
import { CiStar } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { PiFlagPennantFill } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RiFileCopyFill } from "react-icons/ri";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { PiCurrencyInr } from "react-icons/pi";
import about from "../assets/img/start-upImg.png";
import { Link } from "react-router-dom";
import Select from 'react-select';

export default function VisitorPopup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [quantity, setQuantity] = useState(1);

    const [selectedOptions, setSelectedOptions] = useState([]);

    const options1 = [
      { value: 'option1', label: 'Olivia Rhye' },
      { value: 'option2', label: 'Rohil Shah' },
      { value: 'option3', label: 'Jay Mehta' },
      { value: 'option4', label: 'Suryakumar Yadav' },
    ];
    const handleChange = (selected) => {
        setSelectedOptions(selected || []);
      };

    const [selectedOptionsTwo, setSelectedOptionsTwo] = useState([]);
    const options2 = [
        { value: 'option1', label: 'Olivia Rhye' },
        { value: 'option2', label: 'Rohil Shah' },
        { value: 'option3', label: 'Jay Mehta' },
        { value: 'option4', label: 'Suryakumar Yadav' },
      ];
  
    const handleChangeTwo = (selected) => {
        setSelectedOptionsTwo(selected || []);
    };

    const [selectedOptionsThree, setSelectedOptionsThree] = useState([]);
    const options3 = [
        { value: 'option1', label: 'Olivia Rhye' },
        { value: 'option2', label: 'Rohil Shah' },
        { value: 'option3', label: 'Jay Mehta' },
        { value: 'option4', label: 'Suryakumar Yadav' },
      ];
  
    const handleChangeThree = (selected) => {
        setSelectedOptionsThree(selected || []);
    };
  return (
    <div className="padding-sec">
      <Container>
        <Row>
        <div className="text-center">
        <button className="theme-btn" onClick={handleShow}>
        Open popup
      </button>

        </div>
      <Modal
        className="event-popup register-popup"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton className="pb-0">
          <Modal.Title>
            <img src={imgEvent} width="60" />
            <span>Select Tickets</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-3">
          <p className="text-gray">Here is your pass for event access</p>
          <div className="d-flex justify-content-between px-3">
            <h6 className="mt-3">Ticket Type </h6>
            <h6 className="mt-3">Quantity </h6>
          </div>
          <Row className="ticket-row">
            <Col lg={12}>
              <div className="container-bg p-3 rounded-3">
                <h6 className="fw-bold mb-3">28 Sept Visitor Pass (₹) </h6>
                <div className="input-num">
                  <div className="amt-input">
                    <input type="num" className="amount" placeholder="100" />
                  </div>
                  <div className="ince-btns">
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity - 1);
                      }}
                      className="decrr"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="num"
                      className="text-center"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      value={quantity}
                      min={0}
                    />
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity + 1);
                      }}
                      className="incrr active"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <p className="text-gray pt-3">Sales end on September 28</p>
                <hr />
                <div className="input-num align-items-center">
                  <div className="amt-input">
                    <p className="text-gray f-sm mb-0">Select your ticket</p>
                  </div>
                  <div className="ince-btns">
                    <Select
                      options={options1}
                      isMulti
                      value={selectedOptions}
                      onChange={handleChange}
                      placeholder="Select options"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={12} className="mt-3">
              <div className="container-bg p-3 rounded-3">
                <h6 className="fw-bold mb-3">29 Sept Visitor Pass (₹) </h6>
                <div className="input-num">
                  <div className="amt-input">
                    <input type="num" className="amount" placeholder="100" />
                  </div>
                  <div className="ince-btns">
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity - 1);
                      }}
                      className="decrr"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="num"
                      className="text-center"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      value={quantity}
                      min={0}
                    />
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity + 1);
                      }}
                      className="incrr active"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <p className="text-gray pt-3">Sales end on September 29</p>
                <hr />
                <div className="input-num align-items-center">
                  <div className="amt-input">
                    <p className="text-gray f-sm mb-0">Select your ticket</p>
                  </div>
                  <div className="ince-btns">
                    <Select
                      options={options2}
                      isMulti
                      value={selectedOptionsTwo}
                      onChange={handleChangeTwo}
                      placeholder="Select options"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={12} className="mt-3">
              <div className="container-bg p-3 rounded-3">
                <h6 className="fw-bold mb-3">Investor Pass (₹) </h6>
                <div className="input-num">
                  <div className="amt-input">
                    <input type="num" className="amount" placeholder="1000" />
                  </div>
                  <div className="ince-btns">
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity - 1);
                      }}
                      className="decrr"
                    >
                      <FaMinus />
                    </button>
                    <input
                      type="num"
                      className="text-center"
                      onChange={(e) => {
                        setQuantity(e.target.value);
                      }}
                      value={quantity}
                      min={0}
                    />
                    <button
                      onClick={() => {
                        setQuantity((prevQuantity) => prevQuantity + 1);
                      }}
                      className="incrr active"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
                <p className="text-gray pt-3">Sales end on September 29</p>
                <hr />
                <div className="input-num align-items-center">
                  <div className="amt-input">
                    <p className="text-gray f-sm mb-0">Select your ticket</p>
                  </div>
                  <div className="ince-btns">
                    <Select
                      options={options3}
                      isMulti
                      value={selectedOptionsThree}
                      onChange={handleChangeThree}
                      placeholder="Select options"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
        </Row>
      </Container>
    </div>
  )
}
