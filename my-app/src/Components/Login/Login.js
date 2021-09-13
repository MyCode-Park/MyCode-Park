import React from "react";
import "./Login.css";
import logo from "../Pics/logo.png";
import { Link } from "react-router-dom";
import UserSelection from "./UserSelection";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="Logo" className="login__logo" />
      </Link>
      <UserSelection />
    </div>
  );
}

export default Login;
