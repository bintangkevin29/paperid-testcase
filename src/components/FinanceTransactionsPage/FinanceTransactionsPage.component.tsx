import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../redux/root.reducer";
import { financeAccountDelete } from "../../redux/financeAccount/financeAccount.actions";

import CustomModal from "../../components/CustomModal";
import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

import "./FinanceTransactionsPage.style.scss";
import { fetchFinanceTransactionsStartAsync } from "../../redux/financeTransactions/financeTransactions.actions";

const FinanceTransactionsPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const financeTransactionsData = useSelector((state: RootState) => state.financeTransactions.data);
  useEffect(() => {
    dispatch(fetchFinanceTransactionsStartAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tableData = {
    columns: [
      {
        header: "Traction Date",
        key: "trDate",
      },
      {
        header: "Finance Account",
        key: "fnAccount",
      },
      {
        header: "Finance AccountName",
        key: "fnAccountName",
      },
      {
        header: "Reference",
        key: "ref",
      },
      {
        header: "Amount",
        key: "amt",
      },
    ],
    data: financeTransactionsData.map((finance) => {
      const data = {
        trDate: finance.created_at,
        fnAccount: finance.finance_account_type,
        fnAccountName: finance.finance_account_name,
        ref: finance.title,
        amt: finance.debit_amount,
      };
      return data;
    }),
    details: financeTransactionsData,
    dispatchDelete: (id: string) => dispatch(financeAccountDelete(id)),
  };

  return (
    <div className="financeAccountPage">
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton onClick={() => setShowModal(true)}>Create New Account</CustomButton>
      </div>
      {tableData?.data && <CustomTable tableData={tableData} />}
      <CustomModal title="Add" showModal={showModal} setShowModal={() => setShowModal(false)}>
        TEst
      </CustomModal>
    </div>
  );
};

export default FinanceTransactionsPage;
