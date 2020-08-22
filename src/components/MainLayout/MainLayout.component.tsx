import React, { ReactNode } from "react";

import "./MainLayout.style.scss";
import Sidebar from "../Sidebar";
import { Col, Row } from "react-bootstrap";
import TopNav from "../TopNav/TopNav.component";
import { modules } from "../../App";
import { useLocation } from "react-router-dom";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const pageTitle: string | undefined = modules
    .find((module) => module.url === location.pathname)
    ?.title.toUpperCase();

  return (
    <div className="mainLayout">
      <Row className="mainLayout__inner">
        <Col className="mainLayout__sidebarContainer" xs={12} md={2}>
          <Sidebar />
        </Col>
        <Col className="mainLayout__contentContainer" xs={12} md={10}>
          <div className="mainLayout__content">
            <div className="mainLayout__topNav">
              <TopNav />
            </div>
            <div className="mainLayout__mainContent">
              <div className="mainLayout__pageTitleContainer">
                <span className="mainLayout__pageTitle">{pageTitle}</span>
              </div>
              {children}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainLayout;
