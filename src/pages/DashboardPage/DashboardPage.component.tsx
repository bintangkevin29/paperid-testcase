import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/root.reducer";

import "./DashboardPage.style.scss";

const DashboardPage: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return <div>{token}</div>;
};

export default DashboardPage;
