import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";

import { RootState } from "../../redux/root.reducer";
import {
  financeTransactionsDelete,
  financeTransactionsAdd,
} from "../../redux/financeTransactions/financeTransactions.actions";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";
import CustomTable from "../../components/CustomTable";

import "./FinanceTransactionsPage.style.scss";
import FinanceModal from "../FinanceModal";
import { OptionsProps } from "../FinanceModal/FinanceModal.component";

const FinanceTransactionsPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const financeTransactionsData = useSelector((state: RootState) => state.financeTransactions.data);

  const tableData = {
    columns: [
      {
        header: "Transaction Date",
        key: "trDate",
      },
      {
        header: "Type",
        key: "fnAccount",
      },
      {
        header: "Finance Account Name",
        key: "fnAccountName",
      },
      {
        header: "Name",
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

  const options: OptionsProps = {
    fields: [
      {
        name: "title",
        label: "Finance Name",
        placeholder: "Type Here",
        required: true,
      },
      {
        name: "finance_account_id",
        label: "Finance Account",
        placeholder: "Type Here",
        readOnly: true,
      },
      {
        name: "debit_amount",
        label: "Amount (IDR)",
        placeholder: "Type Amount Here",
        required: true,
      },
      {
        name: "description",
        label: "Description",
        placeholder: "Type Description Here",
      },
    ],
    submitDispatch: (data: object, edit?: boolean) => modalSubmitDispatch(data, edit),
  };

  const modalSubmitDispatch = (formData?, edit?) => {
    dispatch(financeTransactionsAdd(formData, edit));
  };

  return (
    <div className="financeAccountPage">
      <Helmet>
        <title>Transactions</title>
      </Helmet>
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton onClick={() => setShowModal(true)}>Create New Finance</CustomButton>
      </div>
      {tableData?.data && <CustomTable modalOptions={options} tableData={tableData} />}
      <FinanceModal
        options={options}
        title="Create New Finance"
        show={showModal}
        setShow={() => setShowModal(false)}
        mode="add"
      />
    </div>
  );
};

export default FinanceTransactionsPage;
