import React from 'react';
import { Button, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Worker Employment System</Navbar.Brand>
            <Nav className="mr-auto"> </Nav>
            <Form inline>
                <Button className="mr-sm-2">Home</Button>
                <Nav.Link className="mr-sm-2">Services</Nav.Link>
                <Nav.Link className="mr-sm-2">Contact</Nav.Link>
                <DropdownButton className="mr-sm-2" id="dropdown-basic-button" title="Register Here">
                    <Link tag="a" to="/add-customer" action><Dropdown.Item href="#/action-1">Register as Customer</Dropdown.Item></Link>
                    <Link tag="a" to="/add-worker" action><Dropdown.Item href="#/action-2">Register as Worker</Dropdown.Item></Link>
                </DropdownButton>
                <Link tag="a" to="/login" action><Button>Login</Button></Link>
                {/* <Button>Login</Button> */}
            </Form>
        </Navbar>
    );
}

export default navbar;