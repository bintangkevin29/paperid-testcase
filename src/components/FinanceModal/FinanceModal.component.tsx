import React from "react";
import CustomModal from "../CustomModal";
import { Form } from "react-bootstrap";

interface Props {
  title: string;
  className?: string;
  setShow: () => void;
  show: boolean;
  items?: object;
  submitDispatch?: (id) => void;
}

const FinanceModal: React.FC<Props> = ({
  title,
  className,
  show = false,
  setShow,
  items,
  submitDispatch,
}) => {
  return (
    <CustomModal
      className={`financeModal ${className}`}
      title={title}
      showModal={show}
      setShowModal={setShow}
      badge="Finance"
    >
      <Form>
        <Form.Label>Tes</Form.Label>
        <Form.Control className="financeModal__field" />
      </Form>
    </CustomModal>
  );
};

export default FinanceModal;
