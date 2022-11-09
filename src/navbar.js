import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function navbar() {
  return (
    <div>
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#" style={{color:'white'}}>Flipkart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant="light" style={{color:'blue'}}>Light</Button>{' '}
            <Nav.Link href="#action1" style={{color:'white'}}>Become a Seller</Nav.Link>
            
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Notification Prefernce</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              24&7 customer service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Adversite
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Download App
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}