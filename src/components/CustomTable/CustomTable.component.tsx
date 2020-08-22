import React, { Fragment, useState, Dispatch } from "react";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import "./CustomTable.style.scss";
import CustomButton from "../CustomButton";
import CustomPopupMenu from "../CustomPopupMenu";
import { FinanceAccountTypes } from "../../redux/financeAccount/financeAccount.actions";

interface TableNode {
  columns: {
    header: string;
    key: string;
  }[];
  data: object[];
  details: any;
  dispatchDelete: (id: string) => void;
}

interface Props {
  tableData: TableNode;
}

const TableRow: React.FC<{ data: object; tableData: TableNode; index: number }> = ({
  data,
  tableData,
  index,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Fragment>
      {tableData.columns.map((column, j) => (
        <td key={j}>{data[column.key]}</td>
      ))}
      <td>
        <div className="customTable__action">
          <CustomButton
            variant="secondary"
            onClick={() => setShowMenu(!showMenu)}
            className="customTable__button"
          >
            Actions
          </CustomButton>
          <CustomPopupMenu className="customTable__popupMenu" show={showMenu}>
            <div className="customTable__popupMenuItems">
              <VisibilityRoundedIcon className="customTable__popupMenuIcon" /> <span>View</span>
            </div>
            <div className="customTable__popupMenuItems">
              <CreateRoundedIcon className="customTable__popupMenuIcon" /> <span>Edit</span>
            </div>
            <div
              onClick={() => tableData.dispatchDelete(tableData.details[index].id)}
              className="customTable__popupMenuItems"
            >
              <DeleteRoundedIcon className="customTable__popupMenuIcon" /> <span>Delete</span>
            </div>
          </CustomPopupMenu>
        </div>
      </td>
    </Fragment>
  );
};

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
              <TableRow data={dt} index={i} tableData={tableData} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
