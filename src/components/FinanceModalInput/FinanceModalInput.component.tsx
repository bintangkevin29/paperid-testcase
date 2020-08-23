import React from "react";

import "./FinanceModalInput.style.scss";
import { Form } from "react-bootstrap";

interface Props {
  label: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  name: string;
}

const FinanceModalInput: React.FC<Props> = ({
  label,
  onChange,
  value,
  className,
  required = false,
  placeholder,
  readOnly = false,
  name,
}) => {
  return (
    <Form.Group className={`financeModalInput ${className}`}>
      <Form.Label className="financeModalInput__label">
        {label} {required && <span className="financeModalInput__requiredIndicator">*</span>}
      </Form.Label>
      <Form.Control
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="financeModalInput__field"
        name={name}
      />
    </Form.Group>
  );
};

export default FinanceModalInput;
