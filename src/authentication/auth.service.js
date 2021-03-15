import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const base_url="http://localhost:8080";

class AuthService {

  

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password, fName, lName, dob, address, phoneNo, gender, roles, workCategory) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      fName,
      lName,
      dob,
      address,
      phoneNo,
      gender,
      roles,
      workCategory
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getUserDetails(id) {
    return axios
      .get(base_url + "details", {
        id
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("details", JSON.stringify(response.data));
        }

        console.log(response.data);
      });
  }

  // getUserDetails(id,token) {
  //   this.details(id,token)
  //   return JSON.parse(localStorage.getItem('details'));
  // ,headers:{Authorization : `Bearer ${token}`}
  // JSON.parse(localStorage.getItem('details'));
  // }
}

export default new AuthService();
