import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tags">Tags</Nav.Link>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="warning" size="lg">
                + Add Task{' '}
              </Button>{' '}
              <NavDropdown title="USER NAME" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
