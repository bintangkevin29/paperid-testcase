import React, { ReactNode } from "react";
import { Button, Spinner } from "react-bootstrap";

import "./CustomButton.style.scss";

type Variant = "primary" | "secondary";

interface Props {
  variant?: Variant;
  children: ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "submit" | undefined;
}

const CustomButton: React.FC<Props> = ({
  variant = "primary",
  children,
  isLoading = false,
  disabled = false,
  className,
  onClick,
  type,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disabled={disabled || isLoading}
      className={`customButton ${className}`}
      type={type}
    >
      {isLoading && (
        <Spinner animation="border" className="mr-3" size="sm" role="status">
          <span className="sr-only"> Loading ...</span>
        </Spinner>
      )}
      {children}
    </Button>
  );
};

export default CustomButton;
