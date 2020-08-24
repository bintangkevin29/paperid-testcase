import React from "react";

import "./SearchInput.style.scss";
import { Form } from "react-bootstrap";

const SearchInput: React.FC<{
  label?: string;
  type?: "text";
  className?: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}> = ({ label = "Search", type = "text", className, onChange }) => {
  return (
    <div className={`searchInput ${className}`}>
      <Form.Control
        onChange={onChange}
        className="searchInput__field"
        placeholder={label}
        type={type}
        readOnly
      />
      <img
        alt=""
        src={require("../../assets/images/search.svg")}
        className="searchInput__icon"
      ></img>
    </div>
  );
};

export default SearchInput;
