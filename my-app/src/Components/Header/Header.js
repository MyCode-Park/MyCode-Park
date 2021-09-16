import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../Data_Handler/StateProvider";

// Icons Import
import { BiSearchAlt } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { auth } from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="/pics/logo-Bg.png" alt="LOGO" />
      </Link>
      <div className="header__nav">
        <Link to="/shop" className="link__line">
          <div className="header__option">Shop</div>
        </Link>
        <Link to="/about" className="link__line">
          <div className="header__option">About Us</div>
        </Link>
        <Link to="/contact" className="link__line">
          <div className="header__option">Contact Us</div>
        </Link>
      </div>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BiSearchAlt className="header__searchIcon" size={35} />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="link__line">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user?.email.split("@")[0] : "Guest"}
              {/* {!user ? "Guest" : user.email} */}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders" className="link__line">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Account</span>
        </div>
        <Link to="/checkout" className="link__line">
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
