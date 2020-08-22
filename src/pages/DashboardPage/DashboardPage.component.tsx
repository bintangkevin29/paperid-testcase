import React from "react";
import { Helmet } from "react-helmet";

import "./DashboardPage.style.scss";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      Dashboard
    </div>
  );
};

export default DashboardPage;
