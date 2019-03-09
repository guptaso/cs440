import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';

//This is the component for the navbar all of the styling is done this does not need to be touched.
class Navigation extends Component {
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand id="app-title" href="/">Crime Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="items" href="/">States</Nav.Link>
            <Nav.Link className="items" href="/Cities">Cities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;