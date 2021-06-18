import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import UserProfile from "./userprofile";

const Home = () => {
  const [sidebarOpen, setSidebarOPen] = useState(false);
  const [menuState, setMenustate] = useState("");

  const openSidebar = () => {
    setSidebarOPen(true);
  };
  const closeSidebar = () => {
    setSidebarOPen(false);
  };

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default Home;
