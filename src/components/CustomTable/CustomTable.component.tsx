import React from "react";

import "./CustomTable.style.scss";

interface TableNode {
  columns: {
    header: string;
    key: string;
  }[];
  data: object[];
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
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((dt, i) => (
            <tr key={i}>
              {tableData.columns.map((column, j) => (
                <td key={j}>{dt[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
