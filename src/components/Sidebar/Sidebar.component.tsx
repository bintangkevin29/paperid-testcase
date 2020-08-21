import React from "react";

import Logo from "../Logo";

import "./Sidebar.style.scss";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navItems: { title: string; icon: string; url: string }[] = [
    {
      title: "Dashboard",
      icon: require("../../assets/images/dashboard.svg"),
      url: "/",
    },
    {
      title: "Finance",
      icon: require("../../assets/images/finance.svg"),
      url: "/finance",
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__backgroundImageContainer">
        <img
          alt=""
          className="sidebar__backgroundImage"
          src={require("../../assets/images/g11.png")}
          srcSet={`${require("../../assets/images/g11@2x.png")} 2x`}
        />
      </div>
      <div className="sidebar__logoContainer">
        <Logo className="sidebar__logo" />
      </div>
      <div className="sidebar__nav">
        {navItems.map((navItem, i) => (
          <Link key={i} className="sidebar__navItem" to={navItem.url}>
            <img alt={navItem.title} src={navItem.icon} />
            {navItem.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
