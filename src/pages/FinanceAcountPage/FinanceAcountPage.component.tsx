import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/root.reducer";
import { financeAccountDelete } from "../../redux/financeAccount/financeAccount.actions";

import CustomModal from "../../components/CustomModal";
import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

import "./FinanceAcountPage.style.scss";
import { Helmet } from "react-helmet";

const FinanceAcountPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
      <Helmet>
        <title>Accounts</title>
      </Helmet>
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton onClick={() => setShowModal(true)}>Create New Account</CustomButton>
      </div>
      {/* {tableData?.data && <CustomTable tableData={tableData} />} */}
      <CustomModal title="Add" showModal={showModal} setShowModal={() => setShowModal(false)}>
        TEst
      </CustomModal>
    </div>
  );
};

export default FinanceAcountPage;
