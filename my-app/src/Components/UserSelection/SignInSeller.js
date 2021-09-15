import React, { useState } from "react";
// import "./SignInSeller.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "../Pics/logo.png";
import validateInfo from "../Validation/Validaion";

function SignInSeller() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");

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
        <h1>Sign In to your seller account</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Enter your E-mail ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h5>GST Number</h5>
          <input
            type="number"
            placeholder=""
            value={text}
            onChange={(e) => setText(e.target.value)}
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
          <Link to="/sellerForm">
            <button className="buyerForm__regBtn">
              Create your Vellanmiam Seller Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignInSeller;
