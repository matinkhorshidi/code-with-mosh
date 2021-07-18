import React, { Component } from 'react';
import { Navbar, Container, Badge } from 'react-bootstrap';
import { Label } from 'semantic-ui-react';

const NavBar = (props) => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Label>
          there is <h2>{props.products}</h2> product basket
        </Label>
        <Navbar.Brand href="#">
          <h1>React Projects</h1>
          <Badge bg="warning" text="dark"></Badge>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
