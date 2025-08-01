import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a Computer Science student with hands-on experience in
                full-stack development, I've built expertise across multiple
                programming languages, frameworks, and technologies. My
                technical foundation spans from low-level programming in C and
                C++ to modern web and mobile development with React Native and
                Firebase. I'm passionate about creating efficient, scalable
                solutions and continuously expanding my skill set through both
                academic coursework and real-world project experience.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Mobile Development" />
                  <h5>Mobile Development</h5>
                  <p>React Native, Expo, iOS Development</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Full Stack Development" />
                  <h5>Full Stack Development</h5>
                  <p>JavaScript, HTML, CSS, APIs, Node.js</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Programming Languages" />
                  <h5>Programming Languages</h5>
                  <p>Python, Java, C, C++, SQL, Bash</p>
                </div>
                <div className="item">
                  <img src={meter3} alt="Cloud & Database" />
                  <h5>Cloud & Database</h5>
                  <p>Firebase, Docker, Git, QA Testing</p>
                </div>
                <div className="item">
                  <img src={meter1} alt="Data Structures" />
                  <h5>Data Structures & Algorithms</h5>
                  <p>Time/Space Complexity, Problem Solving</p>
                </div>
                <div className="item">
                  <img src={meter2} alt="Development Tools" />
                  <h5>Development Tools</h5>
                  <p>Unix/Linux, Version Control, Jupyter</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
