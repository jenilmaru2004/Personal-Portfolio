import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import fullStackDevImg from "../assets/img/FullStackDeveloperimg.png";
import frontEndDevImg from "../assets/img/front-end-developer.jpg";
import mathInstructorImg from "../assets/img/math-instructor.jpg";
import weatherForecastImg from "../assets/img/Online-Weather-Forecast.jpg";
import amazonCloneImg from "../assets/img/amazon-clone.png";
import shapeIntersectionImg from "../assets/img/shape-intersection.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const experiences = [
    {
      title: "FullStack Developer (Co-op)",
      company: "Firefly Spark, Ontario",
      technologies: "React Native, Expo, Firebase, Node JS",
      duration: "May 2025 - present",
      description:
        "Developed responsive web and landing pages. Contributed to mobile application development using React Native and Expo. Integrated Firebase services including Firestore, Authentication, and Cloud Storage. Collaborated on GitHub and participated in team code reviews and QA testing.",
      imgUrl: fullStackDevImg,
    },
    {
      title: "Front-End Developer",
      company: "McMaster, Ontario",
      technologies: "Elm",
      duration: "Jan 2023 - April 2023",
      description:
        "Oversaw and collaborated with a 5-person team to develop 'TrigFlix - Trigonometry Educational Game,' an interactive educational platform. Implemented real-time graphing to reduce user error through visualization. Integrated learning module, MCQ-based practice section, and custom graphing calculator. Increased engagement by 3x through iteration based on interviews. Designed with accessibility to improve onboarding speed by 30%.",
      imgUrl: frontEndDevImg,
    },
    {
      title: "Math Instructor",
      company: "Brilliant Education Center, Qatar",
      technologies: "Teaching, Mathematics",
      duration: "July 2024 - Aug 2024",
      description:
        "Taught mathematics to CBSE Grade 10 students using NCERT curriculum. Focused on building strong conceptual understanding and problem-solving skills. Provided doubt-clearing sessions and helped students improve performance through tailored explanations and practice.",
      imgUrl: mathInstructorImg,
    },
  ];

  const projects = [
    {
      title: "Weather Forecast (API powered)",
      technologies: "Python, API, JSON, Docker",
      duration: "March 2025",
      description:
        "Uses API calling to prompt users for location choice and displays current weather by fetching data from an API. Processes JSON format output and displays wind speed, humidity, temperatures, chance of precipitation, etc. Project uploaded to GitHub and utilized Docker for external application availability.",
      imgUrl: weatherForecastImg,
    },
    {
      title: "Amazon Clone",
      technologies: "HTML, CSS",
      duration: "Sept 2024",
      description:
        "Designed a visually accurate replica of Amazon's 2023 homepage using HTML and CSS. Focused on responsiveness and pixel-perfect design, aided by libraries like Font Awesome. Integrated key sections including dynamic banner, navigation bar, and category cards. Enhanced user interface and prioritized design accuracy to match the original UI.",
      imgUrl: amazonCloneImg,
    },
    {
      title: "Shape Intersection Project",
      technologies: "Java, JUnit",
      duration: "Dec 2023",
      description:
        "Implemented different shape classes using Java. Tested intersections using JUnit and included exception handling. Applied Composite, Iterator, and Singleton design patterns to enable hierarchical grouping and centralized shape control.",
      imgUrl: shapeIntersectionImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Experiences & Projects</h2>
            <p>
              A showcase of my professional experiences and personal projects,
              highlighting my skills in full-stack development, front-end
              technologies, and software engineering principles.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="experiences">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="experiences">Experiences</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="projects">Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="experiences">
                  <Row>
                    {experiences.map((experience, index) => {
                      return <ProjectCard key={index} {...experience} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="projects">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  );
};
