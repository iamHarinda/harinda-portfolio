import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harinda Vishwantha Fernando </span>
            from <span className="purple"> Udubaddawa, Sri Lanka.</span> I hold two degrees in information technology and communication 
            from the Rajarata University of Sri Lanka and the University of Colombo, Sri Lanka (<span className="purple">BICT</span> and <span className="purple">BIT</span> respectively). 
            With a strong background in information technology and communication, 
            I have a solid foundation in the field and currently work as an <span className="purple">associate software engineer</span> for the #1 App Development company in Australia, 
            where I <span className="purple">specialize in PHP and Laravel-based backend development.</span> 
            Throughout my career, I have developed a wide range of skills and experiences that demonstrate my ability to excel in a variety of areas.
            </p>
            <br/>

            <p style={{ color: "rgb(155 126 172)" }}>
            "Plant seeds of kindness, nurture them with creativity, and watch yourself grow into a person that no one will ever forget"{" "}
          </p>
          <footer className="blockquote-footer">Harinda Vishwantha Fernando</footer>
          <br/>

          <p style={{ textAlign: "left" }}>⭐ Working Experience with Clients and Companies
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Paradise Travels</span> | Web Developer
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Elegant Media</span> | Trainee Software Engineer (PHP)
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">HELAMID LLC</span> | WordPress Developer
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Regional Development Bank</span> | Trainee Banking Assistant
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Voice of Heaven</span> | Media Team Leader
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Freelancer</span> | Graphic Designer, Photo Editor
              </li>
            </ul>
          </p>

          <hr></hr>
          <h2>Enough about me; what about you?</h2>
          <a href="mailto:hello@iamharinda.com" class="purple">hello@iamharinda.com</a>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
