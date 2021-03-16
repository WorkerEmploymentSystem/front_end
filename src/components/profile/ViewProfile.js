import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import userService from "../../authentication/user.service";


const ViewProfile = (props) => {
    const id = props.match.params.id;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [setPassword] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [gender, setGender] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");

    const [setData]=useState("");

    useEffect(() => {
        getUserDetails();
    });

    const getUserDetails = () => {
       userService.getPublicContent(id).then(
            (response) => {
                setData(response.data);
                setFirstName(response.data.fName);
                setLastName(response.data.lName);
                setEmail(response.data.email);
                setPassword(response.data.password);
                setDateOfBirth(response.data.dob);
                setPhoneNo(response.data.phoneNo);
                setGender(response.data.gender);
                setHouseNo(response.data.address.houseNo);
                setStreet(response.data.address.street);
                setCity(response.data.address.city);
            }, (error) => {
                console.log(error);
            }
        );
    };

    return(
        <div>
            <h1 style={{textAlign : 'center'}}>{firstName} {lastName}'s Profile Details</h1>
            <table className="table table-bordered table-success">
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>******</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{dateOfBirth}</td>
                </tr>
                <tr>
                    <td>Contact No.</td>
                    <td>{phoneNo}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{gender}</td>
                </tr>
                <tr>
                    <td>House No.</td>
                    <td>{houseNo}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>{street}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{city}</td>
                </tr>
                <tr>
                    <td align="right"><Button color="primary">Update</Button></td>
                    <td><Button color="warning">Back</Button></td>
                </tr>
            </table>
        </div>
    )
}
export default ViewProfile;