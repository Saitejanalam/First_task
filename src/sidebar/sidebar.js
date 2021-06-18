import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const handleClick = (e) => {
    console.log(e.target.getAttribute("data-id"));
    localStorage.setItem("myState", e.target.getAttribute("data-id"));
  };

  console.log(sidebarOpen);
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <h1>Icompaas</h1>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <a herf="#">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <Link to="/userprofile">User Profile </Link>
        </div>
        <div className="sidebar__link">
          <a href="#" onClick={handleClick} data-id={"notify"}>
            Notifications{" "}
          </a>
        </div>
        <div className="sidebar__link">
          <a href="#" onClick={handleClick} data-id={"bill"}>
            Billing & Invoices{" "}
          </a>
        </div>
        <div className="sidebar__link">
          <a href="#" onClick={handleClick} data-id={"plan"}>
            Plans & Addons{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
