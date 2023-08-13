import React from "react";
import "../../Css/Layout/Nav.css";
import NavItem from "./NavItem";
import logo from "../../Assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
      <NavItem name="home" />
      <NavItem name="trending" />
      <NavItem name="create" />
      <NavItem name="account" />
      <div className="credits">
        <div className="creator">
          <a href="https://github.com/AayushMainali-Github">Creator</a>
        </div>
        <div className="icons">
          <a href="https://icons8.com/">Icons</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
