import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../Pics/logo.png";
import { auth } from "../../firebase";

import "./NewUser.css";

function NewUser() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    // firebase is invoked
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // creates a new user with email & password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="NewUser">
      <Link to="/login">
        <img src={logo} className="NewUser__logo" />
      </Link>
      <div className="NewUser__container">
        <h1>Create Account</h1>
        <form>
          <h5>Your Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="NewUser__signInBtn"
            type="submit"
            onClick={register}
          >
            Continue
          </button>
          <p>
            By creating a new account you agree to Vellanmaiam's Condition of
            Use & Sale. Please see our Policy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <small>
            Already have an account?
            <Link to="/buyerForm"> Sign In</Link>
          </small>
          <br />
          <small>
            Want to sell your product?
            <Link to="/sellerForm"> Create seller account</Link>
          </small>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
