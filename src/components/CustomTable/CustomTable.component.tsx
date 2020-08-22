import React from "react";

import "./CustomTable.style.scss";

const CustomTable: React.FC = () => {
  return (
    <div className="customTable">
      <table className="table">
        <thead>
          <tr>
            <th>Test</th>
            <th>asd</th>
            <th>as</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default CustomTable;
