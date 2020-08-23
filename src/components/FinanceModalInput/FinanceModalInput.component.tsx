import React from "react";

import "./FinanceModalInput.style.scss";
import { Form } from "react-bootstrap";

interface Props {
  label: string;
  onChange?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value?: string;
  className?: string;
  required?: boolean;
}

const FinanceModalInput: React.FC<Props> = ({
  label,
  onChange,
  value,
  className,
  required = false,
}) => {
  return (
    <Form.Group className={`financeModalInput ${className}`}>
      <Form.Label>
        {label} {required && <span className="financeModalInput__requiredIndicator">*</span>}
      </Form.Label>
      <Form.Control
        required={required}
        value={value}
        onChange={onChange}
        className="financeModalInput__field"
      />
    </Form.Group>
  );
};

export default FinanceModalInput;
