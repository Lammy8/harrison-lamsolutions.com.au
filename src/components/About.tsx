import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <section id="about" className="about-section text-center bg-black">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-white mb-4">About Me</h2>
            <p className="text-white-50">
              I'm a third-year student at QUT, pursuing a dual degree in <strong>Software Engineering and Cyber Security</strong>. 
              I thrive on practical problem-solving and enjoy bridging the gap between building robust software and securing it. 
              My approach is defined by being hands-on, whether I'm debugging code or troubleshooting complex systems.
            </p>
            <p className="text-white-50">
              My work ethic is grounded in diverse experiences, balancing my studies with fast-paced roles at Elysium Bar & Restaurant 
              and All Access. These roles have honed my adaptability and communication skills, teaching me the value of 
              reliability and exceeding expectations within a team.
            </p>
            <p className="text-white-50">
              Outside of tech, I’m an avid mountain biker and rock climber, hobbies that fuel my drive for overcoming challenges. 
              I am passionate about continuous learning and am currently looking for opportunities to apply my skillsets 
              in a dynamic professional environment.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
