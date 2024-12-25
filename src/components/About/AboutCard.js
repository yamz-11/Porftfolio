import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Athallariq Wiratama </span>
            from <span className="purple"> Sumbawa, NTB.</span>
            <br />
            Fresh graduate of Universitas Muhammadiyah Yogyakarta, majoring in Information Technology. 
            I possess skills in basic programming, data processing, and project management. 
            <br />
            I am proficient in various software tools such as Microsoft Office, MySQL, Visual Studio, 
            and Figma. I am a fast learner who can work well both in teams and independently, 
            with strong analytical and planning abilities. I am communicative, highly dedicated, 
            adaptable, eager to grow, and passionate about learning new things.
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
