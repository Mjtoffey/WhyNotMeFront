import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "src/styles/navbar.module.css"; // Import your custom CSS file

function CustomNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Welcome</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/Browse">Browse</Nav.Link>
                    <NavDropdown title="Sports" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Soccer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Basketball</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNavbar;