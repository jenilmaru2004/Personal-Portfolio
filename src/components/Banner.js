import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Software Engineer", "CS Co-op Student", "IOS Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Jenil Maru`}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I'm a Computer Science student at McMaster University with a
              passion for building intuitive, cross-platform applications that
              make a real impact. I'm currently going into my fourth year and
              working as a Full Stack Developer Co-op at a dynamic startup,
              where I've been involved in IOS app development using React
              Native, Expo, and Firebase.
            </p>
            <p>
              Beyond the screen, I'm passionate about badminton, committed to
              hitting the gym, and love to swim whenever I get the chance — I
              believe that staying active fuels both focus and creativity in my
              work.
            </p>
            <p>
              Whether it's through code or community, I'm always eager to learn,
              build, and grow.
            </p>
            <button onClick={() => console.log("connect")}>
              <a
                href="mailto:jenilmaru2004@gmail.com"
                className="vvd"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Let's connect <ArrowRightCircle size={25} />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} className="text-center">
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
