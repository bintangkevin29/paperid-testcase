import React from "react";

import "./FinanceAcountPage.style.scss";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

const FinanceAcountPage: React.FC = () => {
  const tableData = {
    columns: [
      {
        header: "Name",
        key: "name",
      },
      {
        header: "Description",
        key: "desc",
      },
      {
        header: "Type",
        key: "type",
      },
      {
        header: "Last Modified",
        key: "last_modified",
      },
      {
        header: "Created At",
        key: "created_at",
      },
      {
        header: "Deleted At",
        key: "deleted_at",
      },
    ],
    data: [
      {
        name: "Kevin",
        desc: "Kevin",
        type: "Kevin",
        last_modified: "Kevin",
        created_at: "Kevin",
        deleted_at: "Kevin",
      },
    ],
  };
  return (
    <div className="financeAccountPage">
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton>Create New Account</CustomButton>
      </div>
      <CustomTable tableData={tableData} />
    </div>
  );
};

export default FinanceAcountPage;
