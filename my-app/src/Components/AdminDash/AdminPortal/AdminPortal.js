import React, { useState } from "react";

import Main from "../main/Main";
import Navbar from "../../AdminDash/navbar/Navbar";
import Sidebar from "../../AdminDash/sidebar/Sidebar";
import "./AdminPortal.css";

function AdminPortal() {
  // Admin dash Navigation

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <div>
      <div className="admin__container">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </div>
  );
}

export default AdminPortal;
