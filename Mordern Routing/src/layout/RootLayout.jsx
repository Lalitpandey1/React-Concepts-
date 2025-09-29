import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
