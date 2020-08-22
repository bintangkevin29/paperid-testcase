import React, { useState } from "react";

import "./TopNav.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root.reducer";

const TopNav: React.FC<{ className?: string }> = ({ className }) => {
  const userData = useSelector((state: RootState) => state.auth);
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  return (
    <div className={`topNav ${className}`}>
      <div className="topNav__badge" onClick={() => setShowMenu(!showMenu)}>
        <img
          alt=""
          className="topNav__profileIcon"
          src={require("../../assets/images/users.svg")}
        />
        <span className="topNav__name">{userData.name}</span>
        <div className={`topNav__menu ${showMenu && "topNav__menu--show"}`}>
          <span className="topNav__menuItems topNav__menuItem--title">
            Username
          </span>
          <span className="topNav__menuItems topNav__menuItem--content">
            {userData.username}
          </span>
          <span className="topNav__menuItems topNav__menuItem--title">
            Name
          </span>
          <span className="topNav__menuItems topNav__menuItem--content">
            {userData.name}
          </span>
          <span className="topNav__menuItems topNav__menuItem--title">
            Last Login
          </span>
          <span className="topNav__menuItems topNav__menuItem--content">
            {userData.lastLogin}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
