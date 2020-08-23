import React, { useState } from "react";

import CustomModal from "../../components/CustomModal";
import SearchInput from "../../components/SearchInput";
import CustomButton from "../../components/CustomButton";

import "./FinanceAcountPage.style.scss";
import { Helmet } from "react-helmet";

const FinanceAcountPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="financeAccountPage">
      <Helmet>
        <title>Accounts</title>
      </Helmet>
      <div className="financeAccountPage__subHeader">
        <SearchInput className="financeAccountPage__search" />
        <CustomButton onClick={() => setShowModal(true)}>Create New Account</CustomButton>
      </div>
      <CustomModal title="Add" showModal={showModal} setShowModal={() => setShowModal(false)}>
        TEst
      </CustomModal>
    </div>
  );
};

export default FinanceAcountPage;
