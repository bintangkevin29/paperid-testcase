import React from "react";
import { Form } from "react-bootstrap";

import "./TextInput.style.scss";

type FormType = "text" | "email" | "password";

interface Props {
  icon?: string;
  label: string;
  placeholder?: string;
  type?: FormType;
}

const TextInput: React.FC<Props> = ({ icon, label, type = "text" }) => {
  return (
    <Form.Group className="textInput">
      {icon && (
        <div className="textInput__iconContainer">
          <img alt="" src={icon}></img>
        </div>
      )}
      <Form.Control
        className="textInput__inputField"
        type={type}
        placeholder={label}
      />
    </Form.Group>
  );
};

export default TextInput;
