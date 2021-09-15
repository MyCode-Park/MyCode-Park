import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../Pics/logo.png";
import { auth } from "../../firebase";

import "./SellerForm.css";

function SellerForm() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gstnumber, setGstnumber] = useState("");
  const [pannumber, setPannumber] = useState("");

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
    <div className="Seller">
      <Link to="/login">
        <img src={logo} className="Seller__logo" />
      </Link>
      <div className="Seller__container">
        <h1>Create Seller Account</h1>
        <form>
          <div className="Seller__left">
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
            <h5>Phone</h5>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <h5>GST Number</h5>
            <input
              type="text"
              value={gstnumber}
              onChange={(e) => setGstnumber(e.target.value)}
            />
          </div>
          <div className="Seller__right">
            <h5>PAN Number</h5>
            <input
              type="text"
              value={pannumber}
              onChange={(e) => setPannumber(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Seller__Btn">
            <button
              className="Seller__signInBtn"
              type="submit"
              onClick={register}
            >
              Continue
            </button>
          </div>

          <p>
            By ccreating a new account you agree to Vellanmaiam's Condition of
            Use & Sale. Please see our Policy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <small>
            Already have an account?
            <Link to="/signInSeller"> Sign In</Link>
          </small>
          <br />
          <small>
            Want to Buy product?
            <Link to="/Newuser"> Create Buyer account</Link>
          </small>
        </form>
      </div>
    </div>
  );
}

export default SellerForm;
