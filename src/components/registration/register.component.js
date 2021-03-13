import React, { Component, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../../authentication/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

var now = new Date();

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vdob = value => {
  if (now - new Date(value) < 568024668000) {
    return (
      <div className="alert alert-danger" role="alert">
         User age can't be less than 18 years
      </div>
    );
  }
};

const vphoneNo = value => {
  if (!(value.length === 10)) {
    return (
      <div className="alert alert-danger" role="alert">
        The phoneNo must be 10 characters.
      </div>
    );
  }
};


  var streetvar = "";
  var housevar = "";



export default class Register extends Component {
    constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeDob = this.onChangeDob.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangePhNo = this.onChangePhNo.bind(this);
    this.onChangeWorkCat = this.onChangeWorkCat.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      fName: "",
      lName: "",
      gender: "",
      dob: "",
      phoneNo: "",
      address: { city: "", street: "", houseNo: "" },
      roles: ["CUSTOMER"],
      workCategory: "",
      successful: false,
      message: "",
    };
  }


  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeFName(e) {
    this.setState({
      fName: e.target.value
    });
  }

  onChangeLName(e) {
    this.setState({
      lName: e.target.value
    });
  }

  onChangeDob(e) {
    this.setState({
      dob: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onChangePhNo(e) {
    this.setState({
      phoneNo: e.target.value
    });
  }

  onChangeWorkCat(e) {
    this.setState({
      workCategory: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: { city: e.target.value, street: e.target.value, houseNo: e.target.value }
    });
  }

  onChangeRole(e) {
    this.setState({
      roles: e.target.value
    });
  }


  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.fName,
        this.state.lName,
        this.state.dob,
        this.state.address,
        this.state.phoneNo,
        this.state.gender,
        this.state.roles,
        this.state.workCategory,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div>
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </label>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="fName">First Name
                  <Input
                    type="text"
                    className="form-control"
                    name="fName"
                    value={this.state.fName}
                    onChange={this.onChangeFName}
                    validations={[required]}
                  />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="lName">Last Name
                  <Input
                    type="text"
                    className="form-control"
                    name="lName"
                    value={this.state.lName}
                    onChange={this.onChangeLName}
                    validations={[required]}
                  />
                </label>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNo">Phone No
                  <Input
                    type="text"
                    className="form-control"
                    name="phoneNo"
                    value={this.state.phoneNo}
                    onChange={this.onChangePhNo}
                    validations={[required, vphoneNo]} 
                  />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="dob">Date of Birth
                  <Input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.onChangeDob}
                    validations={[required,vdob]}
                  />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="gender">Gender</label><br />
                  <label className="ml-5">
                  <Input
                    type="radio"
                    className="form-control"
                    name="gender"
                    value="MALE"
                    checked={this.state.gender === "MALE"}
                    onChange={this.onChangeGender}
                    validations={[required]}
                  />
                  MALE
                  </label>
                  <label className="ml-5">
                  <Input
                    type="radio"
                    className="form-control"
                    name="gender"
                    value="FEMALE"
                    checked={this.state.gender === "FEMALE"}
                    onChange={this.onChangeGender}
                    validations={[required]}
                  />
                  FEMALE
                  </label>
                </div>

                <div className="form-group">
                <label htmlFor="workCategory">Work Category
                            <select 
                              type="select" 
                              className="form-control"
                              name="workCategory" 
                              value={this.state.workCategory} 
                              onChange={this.onChangeWorkCat}
                              validations={[required]}
                            >
                                <option></option>
                                <option>CUSTOMER</option>
                            </select>
                            
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="houseNo" className="ml-4">House No                  
                  <Input
                    type="text"
                    className="form-control"
                    name="houseNo"
                    value={this.state.address.houseNo}
                    onChange={this.onChangeAddress} 
                    required
                  />
                  </label>
                  <label htmlFor="street" className="ml-4">Street                  
                  <Input
                    type="text"
                    className="form-control"
                    name="street"
                    value={this.state.address.street}
                    onChange={this.onChangeAddress} 
                    required
                  />
                  </label>
                  <label htmlFor="city" className="ml-4">City
                        <select 
                          type="select" 
                          name="city" 
                          value={this.state.address.city}
                          onChange={this.onChangeAddress} >
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
                        </select>
                        </label>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}
