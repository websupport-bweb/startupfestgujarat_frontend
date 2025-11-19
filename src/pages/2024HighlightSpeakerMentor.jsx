import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Import images
import Sandeep from "../assets/img/Sandeep.jpg";
import user from "../assets/img/user.png";  
import sneh from "../assets/img/sneh.jpg";  
import panel from "../assets/img/panel.JPG";  
import Chiranjeev from "../assets/img/Chiranjeev.webp"
import Deepali from "../assets/img/Deepali.webp"
import Hirav from "../assets/img/Hirav.webp"

const Speakers2024 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const sections = [
        {
            title: "Esteemed Guests",
            data: [
                {
                    name: "Mr. Sandeep Engineer",
                    subtitle: "Managing Director, Astral Limited",
                    image: Sandeep,
                     lg: 4,
                },
                {
                    name: "Mr. Hirav Shah",
                    subtitle:"Astro-Business Strategist",
                    image: Hirav,
                    lg: 4,
                },
                {
                    name: "Mr. Chiranjeev Patel",
                    subtitle: "Managing Director, PC Snehal Group",
                    image: Chiranjeev,
                    lg: 4,
                },
                 
            ],
        },
        {
            title: "Moderator",
            data: [
                {
                    name: "Ms. Deepali Chatwani",
                    image: Deepali,
                    subtitle: "Business Journalist and Media Host",
                },
                
            ],
        },
        {
            title: "Mentor",
            data: Array.from({ length: 9 }, (_, index) => ({
                image: require(`../assets/img/m${index + 1}.webp`),
            })),
        },
        {
            title: "Motivational Speaker",
            data: [
                {
                    name: "Sneh Desai ",
                    image: sneh,
                    subtitle: "Business Journalist and Media Host",
                },
                
            ],
        },
     
    ];

    // ===================== RENDER =====================
    return (
        <>
        <section class=""><img src={panel} className="w-100"/></section>
        <section className="container-bg padding-sec">
            {sections.map((section, i) => (
                <Container key={i} className={i !== 0 ? "pt-5" : ""}>
                    <Row className="d-flex mb-3">
                        <Col>
                            <h3 className="title">{section.title}</h3>
                        </Col>
                    </Row>

                    <Row className="g-4">
                        {section.data.map((person, index) => (
                            <Col
                                key={index}
                                lg={person.lg || 4}
                                md={6}
                                xs={12}
                            >
                                <div className="speaker-card">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-100"
                                    />
                                    <div className="speaker-card-div">
                                        <div>
                                            <p className="mb-0">{person.name}</p>
                                            {person.subtitle && (
                                                <p className="mb-0 font-sm">{person.subtitle}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            ))}
        </section>
        </>
    );
};

export default Speakers2024;
