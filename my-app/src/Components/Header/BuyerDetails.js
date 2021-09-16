import React from "react";

import Navbar from "../../AdminDash/navbar/Navbar";
import Sidebar from "../../AdminDash/sidebar/Sidebar";
import BuyDe from "../AdminDash/sidebar/BuyDe";

function BuyerDetails() {
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
        <BuyDe />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
    </div>
  );
}

export default BuyerDetails;
