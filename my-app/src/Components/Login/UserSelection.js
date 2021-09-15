import React from "react";
import "./UserSelection.css";
import { Link } from "react-router-dom";
function UserSelection() {
  return (
    <div className="userSelection">
      <div className="userSelection__seller">
        <Link to="/signInSeller">
          <h1>Seller Form</h1>
        </Link>
      </div>
      <div className="userSelection__buyer">
        <Link to="/buyerForm">
          <h1>Buyer Form</h1>
        </Link>
      </div>
    </div>
  );
}

export default UserSelection;
