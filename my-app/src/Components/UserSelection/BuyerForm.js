import React, { useState } from "react";
import "./BuyerForm.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "../Pics/logo.png";

function BuyerForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="buyerForm">
      <Link to="/login">
        <img src={logo} className="buyerForm__logo" />
      </Link>
      <div className="buyerForm__container">
        <h1>Sign In</h1>
        <form>
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
            className="buyerForm__signInBtn"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By signin-in you agree to Vellanmaiam's Condition of Use & Sale.
            Please see our Policy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <small>New to Vellanmaiam?</small>
          <Link to="/NewUser">
            <button className="buyerForm__regBtn">
              Create your Vellanmiam account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default BuyerForm;
