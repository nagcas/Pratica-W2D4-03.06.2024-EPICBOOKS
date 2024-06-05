import '../style/MyNav.css';

import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar bg='light' data-bs-theme='light' className="navbar-books shadow">
      <Container>
        <Navbar.Brand href='#home'>EpicBooks</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home' className='item-link'>Home</Nav.Link>
          <Nav.Link href='#about' className='item-link'>About</Nav.Link>
          <Nav.Link href='#browse' className='item-link'>Browse</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;