import React from "react";
import google from "../img/google.png";
import facebook from "../img/facebook.png";
import github from "../img/github.png";

function LoginPage() {
  async function googleLogin() {
    window.open("http://localhost:5000/auth/google", "_self");
  }
  async function githubLogin() {
    window.open("http://localhost:5000/auth/github", "_self");
  }
  async function facebookLogin() {
    window.open("http://localhost:5000/auth/facebook", "_self");
  }
  return (
    <div className="login">
      <h1 className="login-title">Choose a login method</h1>
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-btn google" onClick={googleLogin}>
            <img src={google} alt="" className="icon" />
            Google
          </div>
          <div className="login-btn facebook" onClick={facebookLogin}>
            <img src={facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="login-btn github" onClick={githubLogin}>
            <img src={github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="login-right">
          <input type="text" placeholder="username" />
          <input type="text" placeholder="password" />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
