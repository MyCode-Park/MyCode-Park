import "./Sidebar.css";
import logo from "../../Pics/logo.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Velaanmaiam</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <Link to="/admin"> Dashboard </Link>
        </div>
        <h2>It's to time take action</h2>

        <div className="sidebar__link">
          <i className="fa fa-cart-plus"></i>
          <Link to="/buyde">Buyer Details</Link>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-industry"></i>
          <a href="#">Seller Details</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="#">Warehouse</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="#">Contracts</a>
        </div>

        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="/"> Log out </Link>
        </div>
        <h2>.</h2>
        <div className="sidebar__link">
          {/* <i className=" fa fa-question"></i> */}
          <a href="#">.</a>
        </div>
        <div className="sidebar__link">
          {/* <i className="fa fa-sign-out"></i> */}
          <a href="#"></a>
        </div>
        <div className="sidebar__link">
          {/* <i className="fa fa-calendar-check-o"></i> */}
          <a href="#">.</a>
        </div>
        <div className="sidebar__link">
          {/* <i className="fa fa-files-o"></i> */}
          <a href="#">.</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
