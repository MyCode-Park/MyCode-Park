import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Data_Handler/StateProvider";

// Icons Import
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/pics/logo-Bg.png" alt="LOGO" />
      </Link>
      <div className="header__nav">
        <div className="header__option">Shop</div>
        <div className="header__option">About Us</div>
        <div className="header__option">Contact Us</div>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BiSearchAlt className="header__searchIcon" size={35} />
      </div>
      <div className="header__nav">
        <Link to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionCartIcon">
            <FiShoppingCart size={35} />
            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
