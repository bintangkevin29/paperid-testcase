import React from "react";

import "./SearchInput.style.scss";
import { Form } from "react-bootstrap";

const SearchInput: React.FC<{ label?: string; type?: "text" }> = ({
  label = "Search",
  type = "text",
}) => {
  return (
    <div className="searchInput">
      <Form.Control
        className="searchInput__field"
        placeholder={label}
        type={type}
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
