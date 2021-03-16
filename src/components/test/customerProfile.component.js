import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../authentication/auth.service";
import userService from "../../authentication/user.service";
import NavbarProfile from "../profile/NavbarProfile";

export default class CustomerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      data : [],
      currentUser: { username: "" }
    };

  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    userService.getPublicContent(currentUser.id).then(Response => this.setState({data : Response.data})).catch()
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;


    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <NavbarProfile id={this.state.data.userId} name={this.state.data.fName}/>
            <header className="jumbotron">
              <h3>
                <strong>HI {this.state.data.phoneNo}</strong> Profile
          </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {currentUser.username}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
          </div> : null}
      </div>
    );
  }
}
