import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <nav className='fixed z-50 w-full'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Leonardo Terra</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>About me</Nav.Link>
            <Nav.Link href='#features'>Experiência profissional</Nav.Link>
            <Nav.Link href='#pricing'>Portfólio</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </nav>
  );
}
