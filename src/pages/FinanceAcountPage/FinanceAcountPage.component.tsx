import React from "react";

import "./FinanceAcountPage.style.scss";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

const FinanceAcountPage: React.FC = () => {
  return (
    <div className="financeAccountPage">
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton>Create New Account</CustomButton>
      </div>
      <CustomTable />
    </div>
  );
};

export default FinanceAcountPage;
