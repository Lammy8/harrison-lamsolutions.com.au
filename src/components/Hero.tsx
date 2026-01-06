import { Container } from 'react-bootstrap';
import { ChevronDoubleDown } from 'react-bootstrap-icons';

export default function Hero() {
  return (
    <header className="masthead">
      <Container className="d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Harrison Lam</h1>
            <h2 className="mx-auto mt-2 mb-5">
              Software Engineering & Cyber Security Student
            </h2>
            <a href="#about" className="btn-scroll-down">
              <ChevronDoubleDown size={40} />
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
