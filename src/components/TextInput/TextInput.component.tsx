import React, { FormEvent } from "react";
import { Form } from "react-bootstrap";

import "./TextInput.style.scss";

type FormType = "text" | "email" | "password";

interface Props {
  icon?: string;
  label: string;
  placeholder?: string;
  type?: FormType;
  name?: string;
  onChange?: (e: FormEvent) => void;
}

const TextInput: React.FC<Props> = ({
  icon,
  label,
  type = "text",
  onChange,
  name,
}) => {
  return (
    <Form.Group className="textInput">
      {icon && (
        <div className="textInput__iconContainer">
          <img alt="" src={icon}></img>
        </div>
      )}
      <Form.Control
        onChange={onChange}
        className="textInput__inputField"
        type={type}
        placeholder={label}
        name={name}
      />
    </Form.Group>
  );
};

export default TextInput;
