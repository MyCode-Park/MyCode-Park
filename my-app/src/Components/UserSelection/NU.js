import React, { useState, useEffect } from "react";
import fire from "../../firebase";

const NU = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("false");

  const handleSignUp = () => {
    fire.auth().createUserWithEmailAndPassword.catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  return (
    <div className="NU">
      <h1>Hello</h1>
    </div>
  );
};

export default NU;
