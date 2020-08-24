import React from "react";
import { Helmet } from "react-helmet";

import "./DashboardPage.style.scss";
import CustomChart from "../../components/CustomChart";
import { Row, Col } from "react-bootstrap";

const DashboardPage: React.FC = () => {
  return (
    <div className="dashboardPage">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Row>
        <Col className="dashboardPage__transactionSummary" xs={12} md={6}>
          <span className="dashboardPage__cardHeading">Transaction Summary</span>
          <div className="dashboardPage__card">
            <CustomChart />
          </div>
        </Col>
        <Col className="dashboardPage__transactionSummary" xs={12} md={6}>
          <span className="dashboardPage__cardHeading">Finance Accounts</span>
          <div className="dashboardPage__card dashboardPage__card--transparent">
            <Row>
              <Col lg={6} md={12}>
                <div className="dashboardPage__accountCard">
                  <div className="dashboardPage__accountIcon">S</div>
                  <div className="dashboardPage__accountDetails">
                    <div className="dashboardPage__accountDetailsName">
                      <span>Static Example &ndash; </span>
                      <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                        Bank
                      </span>
                    </div>
                    <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                      New Account
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="dashboardPage__accountCard">
                  <div className="dashboardPage__accountIcon">S</div>
                  <div className="dashboardPage__accountDetails">
                    <div className="dashboardPage__accountDetailsName">
                      <span>Static Example &ndash; </span>
                      <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                        Bank
                      </span>
                    </div>
                    <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                      New Account
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="dashboardPage__accountCard">
                  <div className="dashboardPage__accountIcon">S</div>
                  <div className="dashboardPage__accountDetails">
                    <div className="dashboardPage__accountDetailsName">
                      <span>Static Example &ndash; </span>
                      <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                        Bank
                      </span>
                    </div>
                    <span className="dashboardPage__accountDetailsName dashboardPage__accountDetailsName--details">
                      New Account
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
