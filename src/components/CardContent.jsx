import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CardContent =({ about, text , title ,buttonShow, to , linkToTitle})=>{
    // console.log(about , text)

    return(
        <React.Fragment>
             <Container>
          <Row className="justify-content-between">
            <Col xs={12} md={12} lg={5}>
              <h3 className="title">{React.createElement('div', { dangerouslySetInnerHTML: { __html: title } })}</h3>
              {React.createElement('div', { dangerouslySetInnerHTML: { __html: text } })}

              {buttonShow && 
              <div className="padding-btn">
              <Link to={to} className="theme-btn">
                {linkToTitle}
              </Link>
            </div>}

              
            </Col>
            <Col xs={12} md={8} lg={6} className="offset-md-2 offset-lg-0">
              <img src={about} className="w-100 img-padding" />
            </Col>
          </Row>
        </Container>
        </React.Fragment>
    )
}

export default CardContent