import React, { useEffect, useState } from 'react';
import NavbarProfile from './NavbarProfile';
import axios from 'axios';
import base_url from '../../api/bootapi';
import CustWorkerList from './CustWorkerList';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomerProfile = (props) => {

    const id = props.match.params.id;
    var url = `/profile/add-work/${id}`;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [UserType, setuserType] = useState("");


    useEffect(() => {
        postDatatoServer();
    });

    const postDatatoServer = () => {
        axios.get(`${base_url}/user/details/${id}`).then(
            (response) => {
                setFirstName(response.data.fName);
                setLastName(response.data.lName);
                setuserType(response.data.userType);
            }, (error) => {
                console.log(error);
            }
        );
    };

    return (

        <div >
            <NavbarProfile name={firstName} id={id} />
            <br /><br /><br />
            <h1>Hi, {firstName} {lastName} Welcome to {UserType} Panel</h1>
            <br /><br />
            {/* <h1>{props.match.params.id}</h1> */}
            <h3>JOBS POSTED</h3>
            <br />
            <CustWorkerList id={id} />
            <nav className="d-flex justify-content-center h-25">
                <Link to={url}><Button>ADD WORK</Button></Link>
                <Button className="ml-4">DELETE WORK</Button>
                <Button className="ml-4">UPDATE WORK</Button>
            </nav>
        </div>
    )
}
export default CustomerProfile;