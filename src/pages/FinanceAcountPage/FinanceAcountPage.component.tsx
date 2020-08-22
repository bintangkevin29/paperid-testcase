import React from "react";

import "./FinanceAcountPage.style.scss";

import SearchInput from "../../components/SearchInput";
import { Row, Col } from "react-bootstrap";

const FinanceAcountPage: React.FC = () => {
  return (
    <div className="financeAccountPage">
      <Row>
        <Col xs={4}>
          <SearchInput />
        </Col>
      </Row>
    </div>
  );
};

export default FinanceAcountPage;
