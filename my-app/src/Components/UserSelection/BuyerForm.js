import React, { useState } from "react";
import "./BuyerForm.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import logo from "../Pics/logo.png";
import { Formik } from "formik";
import * as Yup from "yup";

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
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

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
                  name="email"
                  type="text"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                <h5>Password</h5>
                <input
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.password && touched.password && "error"}
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
                <button
                  className="buyerForm__signInBtn"
                  type="submit"
                  onClick={signIn}
                >
                  Sign In
                </button>
                <p>
                  By signin-in you agree to Vellanmaiam's Condition of Use &
                  Sale. Please see our Policy Notice, our Cookies Notice and our
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
      }}
    </Formik>
  );
}

export default BuyerForm;
