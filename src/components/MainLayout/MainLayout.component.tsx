import React, { ReactNode } from "react";

import "./MainLayout.style.scss";
import Sidebar from "../Sidebar";
import { Col, Row } from "react-bootstrap";
import TopNav from "../TopNav/TopNav.component";
import { modules, ModuleNodes } from "../../App";
import { useLocation, Link, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.component";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const parentPath = pathname.substring(0, pathname.lastIndexOf("/"));

  const path = parentPath === "" ? pathname : parentPath;

  let selectedModule = modules.find((module) => module.url === path);

  let pageTitle = selectedModule?.pageTitle;
  const subPages: ModuleNodes[] | undefined = selectedModule?.childModule;

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
              {subPages && (
                <div className="mainLayout__subPageNav">
                  {subPages.map((subPage, i) => (
                    <Link key={i} to={subPage.url}>
                      {subPage.name}
                    </Link>
                  ))}
                </div>
              )}
              <div className="mainLayout__pageTitleContainer">
                <span className="mainLayout__pageTitle">{pageTitle}</span>
              </div>
              <div className="mainLayout__pageContent">
                {subPages ? (
                  <Route path={subPages.map((subPage) => subPage.url)}>
                    {subPages.map((subPage, i) => {
                      const ChildComponent = subPage.component;
                      return (
                        <ProtectedRoute key={i} exact path={subPage.url}>
                          <ChildComponent />
                        </ProtectedRoute>
                      );
                    })}
                  </Route>
                ) : (
                  children
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MainLayout;
