import React from "react";

import Logo from "../Logo";

import "./Sidebar.style.scss";
import { Link } from "react-router-dom";
import { modules } from "../../App";

const Sidebar: React.FC = () => {
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
        {modules.map((navItem, i) => (
          // navItem.childModule ? navItem.childModule[0].url :
          <Link key={i} className="sidebar__navItem" to={navItem.url}>
            <img alt={navItem.name} src={navItem.icon} />
            {navItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
