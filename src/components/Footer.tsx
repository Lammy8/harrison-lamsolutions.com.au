import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer bg-black small text-center text-white-50">
      <Container>
        Copyright &copy; Lam Solutions {new Date().getFullYear()}
      </Container>
    </footer>
  );
}
