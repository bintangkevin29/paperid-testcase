import React, { useState } from "react";

import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";

import "./FinanceAcountPage.style.scss";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/root.reducer";
import FinanceModal, { OptionsProps } from "../../components/FinanceModal/FinanceModal.component";
import {
  financeAccountDelete,
  financeAccountAdd,
} from "../../redux/financeAccount/financeAccount.actions";
import CustomTable from "../../components/CustomTable";

const FinanceAcountPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const financeTransactionsData = useSelector((state: RootState) => state.financeAccount.data);

  const tableData = {
    columns: [
      {
        header: "Account Name",
        key: "name",
      },
      {
        header: "Type",
        key: "type",
      },
      {
        header: "Created At",
        key: "created_at",
      },
    ],
    data: financeTransactionsData.map((finance) => {
      const data = {
        name: finance.name,
        type: finance.type,
        created_at: finance.created_at,
      };
      return data;
    }),
    details: financeTransactionsData,
    dispatchDelete: (id) => dispatch(financeAccountDelete(id)),
  };

  const options: OptionsProps = {
    fields: [
      {
        name: "name",
        label: "Finance Name",
        placeholder: "Type Here",
        required: true,
      },
      {
        name: "description",
        label: "Description",
        placeholder: "Type Here",
      },
      {
        name: "type",
        label: "Type",
        placeholder: "Income / Expense",
        required: true,
      },
    ],
    submitDispatch: (data: object, edit?: boolean) => modalSubmitDispatch(data, edit),
  };

  const modalSubmitDispatch = (formData?, edit?) => {
    dispatch(financeAccountAdd(formData, edit));
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

export default FinanceAcountPage;
