import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgEvent from "../assets/img/ticket-icon.png";
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
import { Link } from "react-router-dom";
import Select from 'react-select';
import axios from "axios";

export default function TicketPopup({ ticketPopup, setTicketPopup, quantity, setQuantity, category, handleCheckout }) {


    const [tickets, setTickets] = useState([]);

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

    useEffect(() => {
        loadTickets();
    }, [])

    const loadTickets = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/auth/list-by-participant/ticketMaster/${category}`)
            console.log("ticket detailssss", res)
            setTickets(res.data);
        }
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="padding-sec">
            <Container>
                <Row>
                    <Modal
                        className="event-popup register-popup"
                        show={ticketPopup}
                        onHide={() => setTicketPopup(false)}
                        animation={false}
                    >
                        <Modal.Header closeButton className="pb-0">
                            <Modal.Title>
                                <img src={imgEvent} width="60" />
                                <span>Select Tickets</span>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="pl-3">
                            <div className="d-flex justify-content-between px-3">
                                <h6 className="mt-3">Ticket  </h6>
                                <h6 className="mt-3">Quantity </h6>
                            </div>
                            <Row className="ticket-row">
                                {tickets?.map((t) => {
                                   return <Col lg={12}>
                                    <div className="container-bg p-3 rounded-3">
                                        <h6 className="fw-bold mb-3">{t.name} (₹) </h6>
                                        <div className="input-num">
                                            <div className="amt-input">
                                                <input type="num" value={t.amount}  className="amount" placeholder="amont" />
                                            </div>
                                            <div className="ince-btns">
                                               
                                                <input
                                                    type="num"
                                                    className="text-center bg-primary text-light"
                                                    onChange={(e) => {
                                                        setQuantity(e.target.value);
                                                    }}
                                                    value={quantity}
                                                    min={0}
                                                />
                                            </div>
                                        </div>
                                         {/* <p className="text-gray pt-3">{t.remarks}</p> */}
                                    </div>
                                    <hr />
                                </Col>
                                }) }
                              
                                {/* <Col lg={12} className="mt-3">
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
                                </Col> */}
                            </Row>

                            <div>
                                <Button type="button" color="primary" className="mt-3 register-btn" onClick={handleCheckout}  >Checkout</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
    )
}
