import React, { Component, useEffect, useState } from 'react';
import NavbarProfile from './NavbarProfile';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { Button } from 'react-bootstrap';
import WorkerList from './WorkerList';
import WorkerListByType from './WorkerListByType';

const WorkerProfile = (props) => {

    const id = props.match.params.id;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [UserCat, setuserCat] = useState("");
    const [UserType, setuserType]=useState("");
    

    useEffect(() => {
        postDatatoServer();
    },[]);

     const postDatatoServer = () => {
        axios.get(`${base_url}/user/details/${id}`).then(
            (response) => {
                setFirstName(response.data.fName);
                setLastName(response.data.lName);
                setuserType(response.data.userType);
                setuserCat(response.data.workCategory);
                console.log(response.data.workCategory)
            }, (error) => {
                console.log(error);
            }
        );
     };

    return (

        <div >
            <NavbarProfile name={firstName} />
            <br /><br /><br />
            <h1>Hi, {firstName} {lastName} Welcome to {UserType} {UserCat} Panel</h1>
            <br /><br />
            {/* <h1>{props.match.params.id}</h1> */}
            <h3>JOBS ACCORDING TO YOUR PROFILE</h3>
            <WorkerListByType category={UserCat}/>
            <br /><br />
            {/* <h1>{props.match.params.id}</h1> */}
            <h3>OTHER JOBS</h3>
            <br />
            <WorkerList category={UserCat}/>
            {/* <nav className="d-flex justify-content-center"><Button>ADD WORK</Button><Button className="ml-4">DELETE WORK</Button></nav> */}
        </div>
    )
}
export default WorkerProfile;