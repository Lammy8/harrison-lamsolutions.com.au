import { Container, Row, Col, Badge, ListGroup } from 'react-bootstrap';
import { BookHalf, CodeSlash } from 'react-bootstrap-icons';

export default function Skills() {
  const units = [
    { code: "CAB302", name: "Software Development", score: "7 (91%)" },
    { code: "EGB103", name: "Computing & Data for Engineers", score: "7 (92%)" },
    { code: "IAB201", name: "Modelling Techniques for IS", score: "6 (78%)" },
    { code: "IFB105", name: "Database Management", score: "6 (78%)" },
  ];

  const languages = ["Java", "Python", "C++", "C"];

  return (
    <section id="skills" className="content-section bg-light text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="mx-auto">
            <h2 className="text-black mb-5">Skills & Education</h2>
          </Col>
        </Row>
        <Row className="text-start">
          {/* Education Column */}
          <Col md={6} className="mb-5 mb-md-0 px-md-5">
            <div className="d-flex align-items-center mb-4">
              <BookHalf className="text-primary me-3" size={30} />
              <h3 className="text-black m-0">Education</h3>
            </div>
            
            <div className="mb-4">
              <h1 className="display-4 text-primary fw-bold mb-0">5.0</h1>
              <p className="lead text-black-50 uppercase">Grade Point Average</p>
            </div>

            <h5 className="text-black mb-3">Notable Units</h5>
            <ListGroup variant="flush" className="bg-transparent">
              {units.map((unit, index) => (
                <ListGroup.Item key={index} className="bg-transparent px-0 py-2 border-bottom border-black-10">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold text-black">{unit.code}</span>
                      <span className="d-block small text-black-50">{unit.name}</span>
                    </div>
                    <Badge bg="primary" pill className="px-3 py-2">
                      {unit.score}
                    </Badge>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Skills Column */}
          <Col md={6} className="px-md-5">
             <div className="d-flex align-items-center mb-4">
              <CodeSlash className="text-primary me-3" size={30} />
              <h3 className="text-black m-0">Technical Skills</h3>
            </div>
            
            <p className="text-black-50 mb-4">
              I have developed a strong foundation in low-level and high-level programming languages through rigorous university coursework and personal projects.
            </p>

            <div className="d-flex flex-wrap gap-2">
              {languages.map((lang, index) => (
                <Badge key={index} bg="dark" className="fs-5 fw-normal px-4 py-3 shadow-sm">
                  {lang}
                </Badge>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
