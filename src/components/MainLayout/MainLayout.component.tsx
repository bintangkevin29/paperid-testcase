import React, { ReactNode } from "react";

import "./MainLayout.style.scss";
import Sidebar from "../Sidebar";
import { Col, Row } from "react-bootstrap";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mainLayout">
      <Row className="mainLayout__inner">
        <Col className="mainLayout__sidebarContainer" xs={12} md={2}>
          <Sidebar />
        </Col>
        <Col className="mainLayout__contentContainer" xs={12} md={10}>
          <div className="mainLayout__content">{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default MainLayout;
