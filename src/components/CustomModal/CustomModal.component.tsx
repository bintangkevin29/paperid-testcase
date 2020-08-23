import React, { ReactNode } from "react";
import { Modal, Badge } from "react-bootstrap";

import "./CustomModal.style.scss";

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
  title: string;
  className?: string;
}

const CustomModal: React.FC<Props> = ({ showModal, setShowModal, children, title, className }) => {
  return (
    <Modal
      className={`customModal ${className}`}
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header closeButton>
        <div className="customModal__titleContainer">
          <Badge variant="lightBlue">Finance</Badge>
          <Modal.Title>{title}</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
