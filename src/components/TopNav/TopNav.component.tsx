import React, { useState } from "react";

import "./TopNav.style.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root.reducer";
import { flushAuthData } from "../../redux/auth/auth.actions";
import CustomPopupMenu from "../CustomPopupMenu/CustomPopupMenu.component";

const TopNav: React.FC<{ className?: string }> = ({ className }) => {
  const userData = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleLogout = (): void => {
    dispatch(flushAuthData());
  };
  return (
    <div className={`topNav ${className}`}>
      <div className="topNav__badge" onClick={() => setShowMenu(!showMenu)}>
        <img
          alt=""
          className="topNav__profileIcon"
          src={require("../../assets/images/users.svg")}
        />
        <span className="topNav__name">{userData.name}</span>
        <CustomPopupMenu show={showMenu}>
          <span className="topNav__menuItems topNav__menuItem--title">Username</span>
          <span className="topNav__menuItems topNav__menuItem--content">{userData.username}</span>
          <span className="topNav__menuItems topNav__menuItem--title">Name</span>
          <span className="topNav__menuItems topNav__menuItem--content">{userData.name}</span>
          <span className="topNav__menuItems topNav__menuItem--title">Last Login</span>
          <span className="topNav__menuItems topNav__menuItem--content">{userData.lastLogin}</span>
          <span
            onClick={() => handleLogout()}
            className="topNav__menuItems topNav__menuItem--contentLogout"
          >
            Logout
          </span>
        </CustomPopupMenu>
      </div>
    </div>
  );
};

export default TopNav;
