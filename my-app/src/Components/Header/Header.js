import React from "react";
import "./Header.css";

// Icons Import
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="/pics/logo-Bg.png" alt="LOGO" />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BiSearchAlt className="header__searchIcon" size={35} />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div>
        <div className="header__optionCartIcon">
          <FiShoppingCart size={35}/>
          <span className="header__optionLineTwo header__basketCount">10</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
