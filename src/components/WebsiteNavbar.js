import React, { Component } from "react";
import logo from "../images/logo1.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class WebsiteNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#comedy">Comedy</NavDropdown.Item>
              <NavDropdown.Item href="#ScienceFiction">
                Science Fiction
              </NavDropdown.Item>
              <NavDropdown.Item href="#Horror">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#WarMovies">War</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Series" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
