import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const AddWorker = () => {
    useEffect(() => {
        document.title = "Register Worker || LMS"
    }, []);

    let history = useHistory();
    const redirect = () => {
        setTimeout(() => {
            history.push('/');
        },5000)
    }

    const [user, addNewWorker] = useState({});
    var streetvar = useState({});
    var housevar = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(user);
        postDatatoServer(user);
        e.preventDefault();
    };

    //creating function to post data on server
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/user/register/`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Worker Added Successfully");
                redirect();
            }, (error) => {
                console.log(error);
                console.log("error");
                toast.error("Worker Registration Failed");
            }
        );
    };

    return (
        <div>
            <ToastContainer />
            <Container style={{ paddingLeft: '300px' }}>
                <h1 className="text-center my-3">Worker Registration</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="fName">Enter First Name</label>
                        <Input required type="text" placeholder="First Name" name="fName" id="fName"
                            onChange={(e) => {
                                addNewWorker({ ...user, fName: e.target.value });
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="lName">Enter Last Name</label>
                        <Input required type="text" placeholder="Last Name" name="lName" id="lName" onChange={(e) => {
                            addNewWorker({ ...user, lName: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <FormGroup>
                            <label for="exampleSelect">User Type</label>
                            <Input required type="select" name="WORKER" id="WORKER" onChange={(e) => {
                                addNewWorker({ ...user, userType: e.target.value });
                            }} >
                                <option></option>
                                <option>WORKER</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label for="exampleSelect">Work Category</label>
                            <Input required type="select" name="CUSTOMER" id="CUSTOMER" onChange={(e) => {
                                addNewWorker({ ...user, workCategory: e.target.value });
                            }} >
                                <option></option>
                                <option>PLUMBER</option>
                                <option>ELECTRICIAN</option>
                                <option>MECHANIC</option>
                                <option>CARPENTER</option>
                                <option>AUTOMOTIVE_TECHNICIAN</option>
                                <option>WELDER</option>
                                <option>PAINTER</option>
                                <option>HOUSE_CLEANING</option>
                                <option>ELECTRONIC_REPAIRER</option>
                            </Input>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <label for="dob">Enter Date of Birth</label>
                        <Input required type="date" placeholder="DOB" name="dob" id="dob" onChange={(e) => {
                            addNewWorker({ ...user, dob: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="gender">Enter your Gender</label><br />
                        <Input type="radio" id="gender" value="MALE" name="gender" onChange={(e) => {
                            addNewWorker({ ...user, gender: e.target.value });
                        }} />
                        <label for="gender">Male</label><br />
                        <Input type="radio" id="gender" value="FEMALE" name="gender" onChange={(e) => {
                            addNewWorker({ ...user, gender: e.target.value });
                        }} /> Female

                    </FormGroup>
                    <FormGroup>
                        <label for="email">Enter Your Email</label>
                        <Input type="text" placeholder="Email" name="email" id="email" onChange={(e) => {
                            addNewWorker({ ...user, email: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="password">Enter Your Password</label>
                        <Input type="password" placeholder="Password" name="password" id="password" onChange={(e) => {
                            addNewWorker({ ...user, password: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="phoneNo">Enter Your Phone Number</label>
                        <Input type="text" placeholder="Phone No" name="phoneNo" id="phoneNo" onChange={(e) => {
                            addNewWorker({ ...user, phoneNo: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="houseNo">Enter Your House No.</label>
                        <Input required type="number" placeholder="House No" name="houseNo" id="houseNo" onChange={(e) => {
                            housevar = e.target.value;
                        }} />

                        <label for="street">Enter Your Street Name </label>
                        <Input required type="text" placeholder="Street Name" name="street" id="street" onChange={(e) => {
                            streetvar = e.target.value;
                        }} />

                        <label for="exampleSelect">City</label>
                        <Input required type="select" name="city" id="city" onChange={(e) => {
                            addNewWorker({ ...user, address: { city: e.target.value, street: streetvar, houseNo: housevar } });
                        }} >
                            <option></option>
                            <option>PUNE</option>
                            <option>MUMBAI</option>
                            <option>NAGPUR</option>
                            <option>BHOPAL</option>
                            <option>INDORE</option>
                            <option>AHMEDABAD</option>
                            <option>JAIPUR</option>
                            <option>NOIDA</option>
                            <option>BANGALORE</option>
                        </Input>
                    </FormGroup>

                    <Container className="text-center">
                        <Button color="success" type="submit">Register</Button>
                        <Button color="warning ml-3" type="reset">Clear</Button>
                    </Container>
                </Form>
            </Container>
        </div>
    )
}
export default AddWorker;