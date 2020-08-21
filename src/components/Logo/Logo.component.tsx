import React from "react";

import "./Logo.style.scss";

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <img
      className={className}
      alt="Paper.id"
      src={require("../../assets/images/paperlogowhite.svg")}
    />
  );
};

export default Logo;
