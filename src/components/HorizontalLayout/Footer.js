import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer  ">
        {/* <Container className=" border-radius-2 text-white" fluid={true}> */}
          <Row className="pt-4 py-4 text-white  bg-black" >
            <Col lg={3}>
                <h1 className="mx-auto">Logo</h1>
            </Col>
            <Col md={3}>
            <h5 className="mb-5">
              Community
            </h5>
            <ul>
              <li>Jaipur</li>
            
            </ul>
            </Col>
            <Col md={3}>
            <h5 className="mb-5">
              About
            </h5>
            </Col>
            <Col className="text-center" md={3}>
           <h5 className="mb-5 ">
              Help & Support
            </h5>
            <ul style={{listStyle:'none'}} className="gap-5   text-center list-style-none">
              <li>Contact Us</li>
              <li className="my-2">Sponsership</li>
              <li>Privacy</li>
              <li className="my-2">Policy</li>
            </ul>

             </Col>
            {/* <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Themesbrand
              </div>
            </Col> */}
          </Row>
          <Row className="mx-3">
            <Col></Col>
            <Col className="text-end">
            {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
            </Col>
            </Row>
            <Row>
            <Col md={6}>{new Date().getFullYear()} © Skote.</Col>
            <Col md={6}>
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Themesbrand
              </div>
            </Col>
          </Row>
        {/* </Container> */}
      </footer>
    </React.Fragment>
  )
}

export default Footer
