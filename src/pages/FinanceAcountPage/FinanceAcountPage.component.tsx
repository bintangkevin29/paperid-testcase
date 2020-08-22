import React from "react";

import "./FinanceAcountPage.style.scss";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/root.reducer";
import { financeAccountDelete } from "../../redux/financeAccount/financeAccount.actions";

const FinanceAcountPage: React.FC = () => {
  const dispatch = useDispatch();
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
    ],
    data: financeAccountData.map((finance) => {
      const data = {
        name: finance.name,
        desc: finance.description,
        type: finance.type,
      };
      return data;
    }),
    details: financeAccountData,
    dispatchDelete: (id: string) => dispatch(financeAccountDelete(id)),
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
