import React from "react";
import "../assets/styles/NavigationBar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar
      id="react-blog-main-nav"
      bg="primary"
      className="navbar-dark fixed-top"
      expand="lg"
    >
      <Navbar.Brand href="#home">{process.env.REACT_APP_NAME}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-item nav-link" to="/blog/create" exact>
            Blog Create
          </NavLink>
        </Nav>
        <Nav className="ml-auto">
          <NavLink className="nav-item nav-link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
