import React from "react";
import { Helmet } from "react-helmet";

import "./DashboardPage.style.scss";
import CustomChart from "../../components/CustomChart";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <CustomChart />
    </div>
  );
};

export default DashboardPage;
