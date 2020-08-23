import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { RootState } from "../../redux/root.reducer";
import {
  fetchFinanceTransactionsStartAsync,
  financeTransactionsDelete,
} from "../../redux/financeTransactions/financeTransactions.actions";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

import "./FinanceTransactionsPage.style.scss";
import FinanceModal from "../FinanceModal";

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
        amt: `Rp ${finance.debit_amount.toFixed(2)}`,
      };
      return data;
    }),
    details: financeTransactionsData,
    dispatchDelete: (id) => dispatch(financeTransactionsDelete(id)),
  };

  return (
    <div className="financeAccountPage">
      <Helmet>
        <title>Transactions</title>
      </Helmet>
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton onClick={() => setShowModal(true)}>Create New Account</CustomButton>
      </div>
      {tableData?.data && <CustomTable tableData={tableData} />}
      <FinanceModal
        submitDispatch={() => {}}
        title="Create New Finance"
        show={showModal}
        setShow={() => setShowModal(false)}
      >
        TEst
      </FinanceModal>
    </div>
  );
};

export default FinanceTransactionsPage;
