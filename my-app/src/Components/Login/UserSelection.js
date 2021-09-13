import React from "react";
import "./UserSelection.css";
import { Link } from "react-router-dom";
function UserSelection() {
  return (
    <div className="userSelection">
      <div className="userSelection__seller">
        <button>Seller Form</button>
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
