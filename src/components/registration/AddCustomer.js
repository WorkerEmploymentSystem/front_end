import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const AddCustomer = () => {
    useEffect(() => {
        document.title = "Register Customer || LMS"
    }, []);

    let history = useHistory();
    const redirect = () => {
        setTimeout(() => {
            history.push('/');
        },5000)
    }

    const [user, addNewCustomer] = useState({});
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
        axios.post(`${base_url}/api/register/`, data).then(
            (response) => {
                console.log(response);
                console.log("success");
                toast.success("Customer Added Successfully");
                redirect();
            }, (error) => {
                console.log(error);
                console.log("error");
                toast.error("Customer Registration Failed");
            }
        );
    };

    return (
        <div>
            <ToastContainer />
            <Container style={{ paddingLeft: '300px' }}>
                <h1 className="text-center my-3">Customer Registration</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="fName">Enter First Name</label>
                        <Input required type="text" placeholder="First Name" name="fName" id="fName"
                            onChange={(e) => {
                                addNewCustomer({ ...user, fName: e.target.value });
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="lName">Enter Last Name</label>
                        <Input required type="text" placeholder="Last Name" name="lName" id="lName" onChange={(e) => {
                            addNewCustomer({ ...user, lName: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <FormGroup>
                            <label for="exampleSelect">User Type</label>
                            <Input required type="select" name="CUSTOMER" id="CUSTOMER" onChange={(e) => {
                                addNewCustomer({ ...user, userType: e.target.value });
                            }} >
                                <option></option>
                                <option>CUSTOMER</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <label for="exampleSelect">Work Category</label>
                            <Input required type="select" name="CUSTOMER" id="CUSTOMER" onChange={(e) => {
                                addNewCustomer({ ...user, workCategory: e.target.value });
                            }} >
                                <option></option>
                                <option>CUSTOMER</option>
                            </Input>
                        </FormGroup>
                    </FormGroup>
                    <FormGroup>
                        <label for="dob">Enter Date of Birth</label>
                        <Input required type="date" placeholder="DOB" name="dob" id="dob" onChange={(e) => {
                            addNewCustomer({ ...user, dob: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="gender">Enter your Gender</label><br />
                        <Input type="radio" id="gender" value="MALE" name="gender" onChange={(e) => {
                            addNewCustomer({ ...user, gender: e.target.value });
                        }} />
                        <label for="gender">Male</label><br />
                        <Input type="radio" id="gender" value="FEMALE" name="gender" onChange={(e) => {
                            addNewCustomer({ ...user, gender: e.target.value });
                        }} /> Female

                    </FormGroup>
                    <FormGroup>
                        <label for="email">Enter Your Email</label>
                        <Input type="text" placeholder="Email" name="email" id="email" onChange={(e) => {
                            addNewCustomer({ ...user, email: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="password">Enter Your Password</label>
                        <Input type="password" placeholder="Password" name="password" id="password" onChange={(e) => {
                            addNewCustomer({ ...user, password: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="phoneNo">Enter Your Phone Number</label>
                        <Input type="text" placeholder="Phone No" name="phoneNo" id="phoneNo" onChange={(e) => {
                            addNewCustomer({ ...user, phoneNo: e.target.value });
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
                            addNewCustomer({ ...user, address: { city: e.target.value, street: streetvar, houseNo: housevar } });
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
export default AddCustomer;