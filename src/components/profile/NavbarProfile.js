import React from 'react';
import { Button, Dropdown, DropdownButton, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authService from '../../authentication/auth.service';
//import axios from 'axios';

const NavbarProfile = (props) => {
  const url=`/profile/ViewProfile/${props.id}`;

  const clickHandler=()=>{
     authService.logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Welcome {props.name}</Navbar.Brand>
      <Nav className="mr-auto"> </Nav>
      <Form inline>
        <Button className="mr-xl-5">Home</Button>
        <Nav.Link className="mr-xl-5">Services</Nav.Link>
        <Nav.Link className="mr-xl-5">Contact</Nav.Link>
        <DropdownButton className="mr-xl-5" id="dropdown-basic-button" title="Profile">
          <Link tag="a" to={url} action><Dropdown.Item href="#/action-1">View your Profile</Dropdown.Item></Link>
          <Link tag="a" to="/" action onClick={clickHandler}><Dropdown.Item href="#/action-2">LogOut</Dropdown.Item></Link>
        </DropdownButton>
        </Form>
    </Navbar>
  );
}

export default NavbarProfile;