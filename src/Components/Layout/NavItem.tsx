import React, { useState, MouseEvent } from "react";
import { navProps } from "../../Types/Nav";
import { Icons } from "../../Types/Icons";
import { Link, Location, useLocation } from "react-router-dom";
import getIcons from "../../Utilities/getIcons";
import "../../Css/Layout/NavItem.css";
import firstLetterUppercase from "../../Utilities/firstLetterUppercase";

const NavItem = (props: navProps) => {
  const path: string = props.name;
  const navIcons: Icons = getIcons(path);

  //hover effect
  const [hovered, setHovered] = useState<string>(navIcons.gray);
  const [hoveredClass, setHoveredClass] = useState<string>("light");
  const onEnter = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(navIcons.black);
    setHoveredClass("dark");
  };
  const onLeave = (e: MouseEvent) => {
    e.preventDefault();
    setHovered(navIcons.gray);
    setHoveredClass("light");
  };

  //check if active
  const location: Location = useLocation();
  let pathname: string = location.pathname;
  let active: string = pathname.split("/")[1];
  if (active === "") active = "home";

  return (
    <Link onMouseEnter={onEnter} onMouseLeave={onLeave} className="navItem" to={path}>
      <img src={active === path ? navIcons.blackfilled : hovered} alt={path} />
      <span className={active === path ? "active" : hoveredClass}>{firstLetterUppercase(path)}</span>
    </Link>
  );
};

export default NavItem;
