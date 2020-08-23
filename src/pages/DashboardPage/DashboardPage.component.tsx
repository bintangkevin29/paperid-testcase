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
          <div className="dashboardPage__chartContainer">
            <CustomChart />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardPage;
