import React, { useState, FormEvent } from "react";
import CustomModal from "../CustomModal";
import { Form } from "react-bootstrap";
import FinanceModalInput from "../FinanceModalInput";
import CustomButton from "../CustomButton";

import "./FinanceModal.style.scss";

interface OptionsProps {
  fields: {
    name: string;
    label: string;
    placeholder: string;
    required?: boolean;
    readOnly?: boolean;
  }[];
}

interface Props {
  title: string;
  className?: string;
  setShow: (boolean) => void;
  show: boolean;
  options: OptionsProps;
  submitDispatch: (id?) => void;
  mode?: "edit" | "view" | "delete";
  value?: string | number;
}

const FinanceModal: React.FC<Props> = ({
  title,
  className,
  show = false,
  setShow,
  options,
  submitDispatch,
  mode = "edit",
  value,
}) => {
  const [formData, setFormData] = useState<object>();

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    submitDispatch(formData);
    setShow(false);
  };

  return (
    <CustomModal
      className={`financeModal ${className}`}
      title={title}
      showModal={show}
      setShowModal={setShow}
      badge="Finance"
    >
      <Form onSubmit={handleFormSubmit}>
        {options.fields.map((field, i) => (
          <FinanceModalInput
            key={i}
            name={field.name}
            onChange={handleFieldChange}
            readOnly={field.readOnly}
            required={field.required}
            label={field.label}
            value={value}
          />
        ))}
        <div className="financeModal__actions">
          <CustomButton
            className="financeModal__button financeModal__button--submit"
            variant="secondary"
            type="submit"
          >
            Simpan
          </CustomButton>
          <CustomButton
            onClick={() => setShow(false)}
            className="financeModal__button financeModal__button--cancel"
            variant="outline-dark"
          >
            Batal
          </CustomButton>
        </div>
      </Form>
    </CustomModal>
  );
};

export default FinanceModal;
