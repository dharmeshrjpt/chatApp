import React, { Component } from "react";
import "./SignUpForm.css";
class signUpForm extends Component {
  render() {
    return (
      <div className="main">
        <h1>chatApp</h1>
        <form method="post">
          <div className="container">
            <h2>SIGN UP</h2>
            <label for="Name">Name</label>
            <br />

            <input type="text" placeholder="Enter Name" name="Name" required />
            <br />
            <br />
            <label for="uname">Username</label>
            <br />

            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <br />
            <br />
            <label for="email">Email</label>
            <br />

            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            />
            <br />
            <br />
            <label for="psw">password</label>

            <br />
            <input
              type="password"
              placeholder="Enter password"
              name="psw"
              required
            />
            <br />
            <br />
            <input type="submit" value="SignUp" />
            <br />
            <br />
            <label
              for="Login"
              style={{
                color: "black",
                marginLeft: "20%",
                textDecoration: "none",
              }}
            >
              Already have an account?
              <br />
              <b>
                <a className="Login" href="./signUp">
                  Login
                </a>
              </b>{" "}
              here.
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default signUpForm;
