import React, { Fragment } from "react";

import "./CustomTable.style.scss";
import CustomButton from "../CustomButton";

interface TableNode {
  columns: {
    header: string;
    key: string;
  }[];
  data: object[];
  details: object[];
}

interface Props {
  tableData: TableNode;
}

const CustomTable: React.FC<Props> = ({ tableData }) => {
  return (
    <div className="customTable">
      <table className="table">
        <thead>
          <tr>
            {tableData.columns.map((column) => (
              <th key={column.key}>{column.header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((dt, i) => (
            <tr key={i}>
              {tableData.columns.map((column, j) => (
                <td key={j}>{dt[column.key]}</td>
              ))}
              <td>
                <CustomButton variant="secondary" className="customTable__button">
                  Actions
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
