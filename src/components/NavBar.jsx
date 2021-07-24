import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NavBar = (props) => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="root-navbar"
    >
      <Container>
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            <h2>React Projects</h2>
          </Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="1">
            <Nav.Item>
              <Nav.Link eventKey="1" as={Link} to="/">
                <h5>Movies</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" as={Link} to="/Customers">
                <h5>Customers</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" as={Link} to="/Rentals">
                <h5>Rentals</h5>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default NavBar;
