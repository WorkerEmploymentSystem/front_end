import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast, ToastContainer } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const AddWorkDesc = (props) => {
    useEffect(() => {
        document.title = "Add work Description || LMS"
    }, []);

    const id = props.match.params.id;

    const [workDescription, addWork] = useState({});

    let history = useHistory();
    const redirect = () => {
        var url=`/profile/CUSTOMER/${id}`;
        setTimeout(() => {
            history.push(url);
        }, 5000)
    }

    //form handler function
    const handleForm = (e) => {
        console.log(workDescription);
        postDatatoServer(workDescription);
        e.preventDefault();
    };

    //creating function to add work desc.
    const postDatatoServer = (data) => {
        axios.post(`${base_url}/user/regWorkDesc/${id}`, data).then(
            (response) => {
                console.log(response.data);
                console.log("success");
                toast.success("Work Desc Added Successfully  :");
                redirect();
            }, (error) => {
                console.log(error);
                console.log("error");
                toast.error("Work description failed to add:");
            }
        );
    };

    return (
        <div>
            <ToastContainer />
            <Container style={{ paddingLeft: '300px' }}>
                <h1 className="text-center my-3">Add Work Description</h1>
                <Form onSubmit={handleForm}>
                    <FormGroup>
                        <label for="amount"> Work Amount</label>
                        <Input required type="text" placeholder="Work Amount" name="amount" id="amt"
                            onChange={(e) => {
                                addWork({ ...workDescription, workAmount: e.target.value });
                            }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="work">Work Description</label>
                        <Input required type="text" placeholder="Work Description" name="desc" id="desc" onChange={(e) => {
                            addWork({ ...workDescription, description: e.target.value });
                        }} />
                    </FormGroup>
                    <FormGroup>
                        <label for="exampleSelect">Work Category</label>
                        <Input required type="select" name="CUSTOMER" id="CUSTOMER" onChange={(e) => {
                            addWork({ ...workDescription, category: e.target.value });
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
                    <FormGroup>

                        <label for="exampleSelect">City</label>
                        <Input required type="select" name="city" id="city" onChange={(e) => {
                            addWork({ ...workDescription, location: e.target.value });
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
                        <Button color="success" type="submit">Add</Button>
                        <Button color="warning ml-3" type="reset">Clear</Button>
                    </Container>
                </Form>
            </Container>
        </div>
    )
}
export default AddWorkDesc;