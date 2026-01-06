import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Laptop, Cpu } from 'react-bootstrap-icons';

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio built with React, TypeScript, and Vite. Designed to showcase my software engineering skills. Self taught with the help of YouTube tutorials and skills learned at QUT",
      tags: ["React", "TypeScript", "Vite", "CSS"],
      icon: <Laptop size={50} className="text-primary mb-3" />
    },
    {
      title: "NeuroDeck",
      description: "An interactive study app for university students integrating LibreTexts for open-access textbooks. Features AI-powered summaries, automated flashcard generation, and Anki-style spaced repetition for active learning.",
      tags: ["Java", "AI Integration", "LibreTexts API", "Web Scraping"],
      link: "https://lammy8.github.io/CAB-302/",
      icon: <Cpu size={50} className="text-primary mb-3" />
    }
  ];

  return (
    <section id="projects" className="projects-section bg-medium-gray">
      <Container>
        <Row className="justify-content-center no-gutters mb-5 mb-lg-0">
          <Col lg={12} className="text-center">
            <h2 className="text-black mb-4">Featured Projects</h2>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col lg={6} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm border-0 text-center">
                <Card.Body className="d-flex flex-column align-items-center">
                  <div className="icon-wrapper">
                    {project.icon}
                  </div>
                  <Card.Title><h4>{project.title}</h4></Card.Title>
                  <Card.Text className="flex-grow-1 text-muted">
                    {project.description}
                  </Card.Text>
                  <div className="mb-3">
                    {project.tags.map(tag => (
                      <Badge bg="secondary" className="me-1" key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                      Java Docs
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
