import React from "react";

import "./FinanceAcountPage.style.scss";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root.reducer";

const FinanceAcountPage: React.FC = () => {
  const financeAccountData = useSelector((state: RootState) => state.financeAccount.data);
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
    ],
    data: financeAccountData.map((finance) => {
      const data = {
        name: finance.name,
        desc: finance.description,
        type: finance.type,
        last_modified: finance.last_modified,
      };
      return data;
    }),
    details: financeAccountData,
  };

  return (
    <div className="financeAccountPage">
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton>Create New Account</CustomButton>
      </div>
      {tableData?.data && <CustomTable tableData={tableData} />}
    </div>
  );
};

export default FinanceAcountPage;
