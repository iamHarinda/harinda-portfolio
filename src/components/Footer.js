import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>© {year} | All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Made with ❤️ | HaVilahLK</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <li className="social-icons">
              <a
                href="tel:+94765329064"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
          <li className="social-icons">
              <a
                href="mailto:hello@iamharinda.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;