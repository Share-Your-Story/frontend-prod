import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import "../../Css/Layout/Layout.css";
const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
