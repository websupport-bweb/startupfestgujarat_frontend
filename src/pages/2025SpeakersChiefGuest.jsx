import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import abhijeet from "../assets/img/Abhijeet-Satani.jpg";
import fenil from "../assets/img/ca.jpeg";
import naman from "../assets/img/NamanAnand.jpeg";
import neil from "../assets/img/Neil.JPEG";
import raul from "../assets/img/Raul.jpeg";
import sonu from "../assets/img/SonuSharma.png";
import tirth from "../assets/img/tirth.jpeg";

const SpeakersChiefGuest = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className="container-bg padding-sec">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center">
                            <h3 className="title">Chief Guest</h3>
                        </Col>
                    </Row>
                    <Row className="g-4 justify-content-center">
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={neil} alt="Neil Nitin Mukesh" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">Neil Nitin Mukesh</p>
                                        <p className="mb-0 font-sm">
                                            Renowned Indian Actor & Film Producer
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="pt-5">
                    <Row className="d-flex justify-content-center">
                        <Col className="text-center">
                            <h3 className="title">Speakers</h3>
                        </Col>
                    </Row>
                    <Row className="g-4">
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={sonu} alt="Sonu Sharma" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">Sonu Sharma</p>
                                        <p className="mb-0 font-sm">
                                            International Motivational Speaker
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={raul} alt="Raul John Aju" className="w-100" />
                                <div className="speaker-card-div-updated">
                                    <div>
                                        <p className="mb-0">Raul John Aju</p>
                                        <p className="mb-0 font-sm">
                                            India's Young AI Innovator, CEO of Project 47x, TEDX Speaker
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={naman} alt="Naman Anand" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">Naman Anand</p>
                                        <p className="mb-0 font-sm">
                                            Mentalist, Magician
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={abhijeet} alt="Mr. Abhijeet Satani" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">Mr. Abhijeet Satani</p>
                                        <p className="mb-0 font-sm">
                                            Scientist
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={tirth} alt="Mr. Tirth Patel" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">Mr. Tirth Patel</p>
                                        <p className="mb-0 font-sm">
                                            CEO & Director of Anand Innovation Private Limited
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className="speaker-card">
                                <img src={fenil} alt="CA. DR. CS. Fenil Shah" className="w-100" />
                                <div className="speaker-card-div">
                                    <div>
                                        <p className="mb-0">CA. DR. CS. Fenil Shah</p>
                                        <p className="mb-0 font-sm">
                                            WIRC Treasurer and Former ICAI Ahmedabad Chairman, CA-CS Professional, TEDX Researcher, Author & Philanthropist
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default SpeakersChiefGuest;
