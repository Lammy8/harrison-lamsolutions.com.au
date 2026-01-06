import { Container, Row, Col, Card } from 'react-bootstrap';
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <section id="contact" className="contact-section bg-black">
      <Container>
        <h2 className="text-white mb-5 text-center">Let's Connect</h2>
        <Row className="justify-content-center">
          <Col md={4} className="mb-3 mb-md-0">
            <Card className="py-4 h-100 bg-dark text-white border-0">
              <Card.Body className="text-center">
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" style={{ borderColor: '#000f50ff', width: '100px' }} />
                <div className="text-white-50 d-flex justify-content-center">
                  <a href="mailto:harrison@lamsolutions.com" className="text-white-50 text-decoration-none d-flex align-items-center gap-2">
                    <Envelope size={20} /> harrison@lamsolutions.com
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4} className="mb-3 mb-md-0">
            <Card className="py-4 h-100 bg-dark text-white border-0">
              <Card.Body className="text-center">
                <h4 className="text-uppercase m-0">Socials</h4>
                <hr className="my-4 mx-auto" style={{ borderColor: '#000f50ff', width: '100px' }} />
                <div className="text-white-50 d-flex flex-column align-items-center gap-3">
                  <a href="https://github.com/Lammy8" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none d-flex align-items-center gap-2">
                    <Github size={20} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/harrison-lam-8hl88" target="_blank" rel="noopener noreferrer" className="text-white-50 text-decoration-none d-flex align-items-center gap-2">
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
