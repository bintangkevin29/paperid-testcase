import React, { ReactNode } from "react";

import "./CustomPopupMenu.style.scss";

interface Props {
  children: ReactNode;
  className?: string;
  show: boolean;
}

const CustomPopupMenu: React.FC<Props> = ({ children, className, show }) => {
  return show ? (
    <div className={`customPopupMenu ${className}`}>{children}</div>
  ) : (
    <div className="customPopMenu--hide"></div>
  );
};

export default CustomPopupMenu;
