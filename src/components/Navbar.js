import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { useGlobalState } from "../context/GlobalState";
import authService from "../services/auth.service";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "src/styles/navbar.module.css";

function CustomNavbar() {
    const { state, dispatch } = useGlobalState();
    const router = useRouter();

    const handleLogout = () => {
        authService.logout();
        dispatch({ type: 'LOGOUT_USER' });
        router.push('/');
    };

    return (
        <div className={styles.navbarContainer}>
            <div className="d-flex justify-content-center">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Welcome</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href={`/browsePage`}>Browse</Nav.Link>
                        </Nav>
                        <Form inline className="d-flex">
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav>
                            {state.user ? (
                                <Nav.Link className="p-3 justify-content-end" onClick={handleLogout}>Logout</Nav.Link>
                            ) : (
                                <Nav.Link className="p-3 justify-content-end" href={`/login`}>Login</Nav.Link>
                            )}
                            {state.user ? (
                                <Nav.Link href={`/user-profile`}>
                                    <FontAwesomeIcon icon={faUser} style={{ color: "black" }} />
                                </Nav.Link>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default CustomNavbar;