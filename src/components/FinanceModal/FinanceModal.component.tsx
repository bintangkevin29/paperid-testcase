import React, { useState, FormEvent } from "react";
import CustomModal from "../CustomModal";
import { Form } from "react-bootstrap";
import FinanceModalInput from "../FinanceModalInput";
import CustomButton from "../CustomButton";

import "./FinanceModal.style.scss";

export interface OptionsFieldProps {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  readOnly?: boolean;
  value?: string | number;
  hidden?: boolean;
}

export interface OptionsProps {
  fields: OptionsFieldProps[];
  submitDispatch: (params?, edit?) => void;
}

interface Props {
  title: string;
  className?: string;
  setShow: (boolean) => void;
  show: boolean;
  options: OptionsProps;
  mode?: "add" | "edit" | "view" | "delete";
}

const FinanceModal: React.FC<Props> = ({
  title,
  className,
  show = false,
  setShow,
  options,
  mode = "add",
}) => {
  const [formData, setFormData] = useState<object | any>();
  const [safeToRender, setSafeToRender] = useState<boolean>(false);

  if (!formData) {
    let temp;
    options.fields.forEach((field) => {
      temp = { ...temp, [field.name]: field.value };
    });
    setFormData(temp);
    setSafeToRender(true);
  }

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e: FormEvent) => {
    if (options?.submitDispatch) {
      e.preventDefault();

      await options.submitDispatch(formData, mode === "edit");
      setShow(false);
    }
  };

  return (
    <CustomModal
      className={`financeModal ${className}`}
      title={title}
      showModal={show}
      setShowModal={setShow}
      badge="Finance"
    >
      {safeToRender && (
        <Form onSubmit={handleFormSubmit}>
          {options.fields.map((field, i) => (
            <FinanceModalInput
              key={i}
              name={field.name}
              onChange={handleFieldChange}
              readOnly={field.readOnly}
              required={field.required}
              label={field.label}
              value={formData[field.name]}
              hidden={field.hidden}
            />
          ))}
          <div className="financeModal__actions">
            {(mode === "add" || mode === "edit") && (
              <CustomButton
                className="financeModal__button financeModal__button--submit"
                variant="secondary"
                type="submit"
                disabled={mode === "edit"}
              >
                Simpan
              </CustomButton>
            )}
            <CustomButton
              onClick={() => setShow(false)}
              className="financeModal__button financeModal__button--cancel"
              variant="outline-dark"
            >
              Batal
            </CustomButton>
          </div>
        </Form>
      )}
    </CustomModal>
  );
};

export default FinanceModal;
