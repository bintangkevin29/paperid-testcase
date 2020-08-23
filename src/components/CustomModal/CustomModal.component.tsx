import React, { ReactNode } from "react";
import { Modal, Badge } from "react-bootstrap";

import "./CustomModal.style.scss";

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  children: ReactNode;
  title: string;
  className?: string;
  badge?: string | undefined;
}

const CustomModal: React.FC<Props> = ({
  showModal = false,
  setShowModal,
  children,
  title,
  className,
  badge = undefined,
}) => {
  return (
    <Modal
      className={`customModal ${className}`}
      show={showModal}
      onHide={() => setShowModal(false)}
    >
      <Modal.Header closeButton>
        <div className="customModal__titleContainer">
          {badge && <Badge variant="lightBlue">{badge}</Badge>}
          <Modal.Title>{title}</Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
