import React, { Component } from "react";
import "./loginForm.css";
class loginForm extends Component {
  render() {
    return (
      <div className="main">
        <h1>chatApp</h1>
        <form method="post">
          <div className="container">
            <h2>LOGIN</h2>
            <label for="uname">Username</label>
            <br />

            <input
              type="text"
              placeholder="Enter username"
              name="uname"
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
            <input type="submit" value="Login" />
            <br />
            <br />
            <span>
              <a className="forgotPassword " href="www.google.com">
                Forgot Password
              </a>
            </span>
            <br />
            <br />
            <hr />
            <br />
            <label for="SignUp">
              Don't have an account?
              <a
                className="signup"
                style={{
                  color: "black",
                  marginLeft: "10px",
                  textDecoration: "none",
                }}
                href="./signUp"
              >
                SignUp
              </a>
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default loginForm;
