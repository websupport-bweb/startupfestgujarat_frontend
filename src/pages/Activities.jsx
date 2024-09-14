import React, { useEffect, useState } from 'react';
import { Col, Row, Accordion, Card, Container } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';
import img from "../assets/img/Activities/1.png"

function Activites() {
    const content = [
        { url: require('../assets/img/Activities/1.png') , heading: "Panel Discussion" , para :"Panels with diverse viewpoints on trending industry topics and informal fireside chats with successful entrepreneurs sharing their journey and lessons learned."},
        { url: require('../assets/img/Activities/2.png') , heading: "Workshops" , para :"Practical workshops on topics like digital marketing, growth hacking, and funding strategies."},
        { url: require('../assets/img/Activities/3.png') , heading: "Storytelling Sessions" , para :"Entrepreneurs share both their successes and failures."},
        { url: require('../assets/img/Activities/4.png') , heading: "Open Mic" , para :"An open mic platform for attendees to share their startup experiences."},
        { url: require('../assets/img/Activities/5.png') , heading: "Business Simulations" , para :"Business simulation games to test entrepreneurial skills."},
        { url: require('../assets/img/Activities/6.png') , heading: "Startup Trivia" , para :"Trivia sessions focused on startup knowledge and history."},
        { url: require('../assets/img/Activities/7.png') , heading: "Launch Pads" , para :"Platform for startups to unveil new products or services."},
        { url: require('../assets/img/Activities/8.png') , heading: "Announcement Spots" , para :"For startups to make significant announcements or updates."},
        { url: require('../assets/img/Activities/9.png') , heading: "Real-Time Prototyping" , para :"Set up spaces where startups can engage in live prototyping."},
        { url: require('../assets/img/Activities/10.png') , heading: "Design Thinking Workshops" , para :"Design sprints to tackle real-world challenges."},
        { url: require('../assets/img/Activities/11.png') , heading: "Problem-Solving Challenges" , para :"Hackathons focused on specific industry problems or themes."},
        { url: require('../assets/img/Activities/12.png') , heading: "Innovation Sprints" , para :"Short, intense innovation sprints with prizes for the best solutions"},
        
      ]

  return (
    <>
      <section className='padding-sec gradeint-bg'>
        <Container>
        <Row className='justify-content-center'>
          <Col lg={12} xs={12}>
          <h2 className='title text-center'>
            Activities
          </h2>

           
          </Col>

          <Col lg={12} xs={12} className="p-0">
            <div className="p-relative">
                <Row className='mt-5'>
            {content.map((item, index) => (
                    <Col lg={3} key={index} className='mb-5'>
                    <div className='h-100 speaker-card2 p-4 bg-white'>
                    
                    <div className='min-h-activities'>
                    <h4 className='fw-bold'>{item.heading}</h4>
                    <p className='subheading font-sm-activities' >{item.para}</p>
                    </div>
                    <img src={item.url} className='w-100' alt="no img" />
                    </div>
                    </Col>
                  ))}
            
            </Row>
                

             
            </div>
          </Col>
        </Row>
        </Container>
      </section>
      <br /><br /><br />
    </>
  );
}

export default Activites;
