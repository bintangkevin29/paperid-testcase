import React, { Fragment, useState } from "react";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import "./CustomTable.style.scss";
import CustomButton from "../CustomButton";
import { OverlayTrigger, Popover } from "react-bootstrap";
import FinanceModal from "../FinanceModal";
import { OptionsProps, OptionsFieldProps } from "../FinanceModal/FinanceModal.component";

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
  modalOptions: OptionsProps;
}

interface TableRowProps {
  data: object;
  tableData: TableNode;
  index: number;
  modalOptions: OptionsProps;
}

const TableRow: React.FC<TableRowProps> = ({ data, tableData, index, modalOptions }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleDistpachDelete = (): void => {
    setShowMenu(false);
    tableData.dispatchDelete(tableData.details[index].id);
  };

  const options: OptionsProps = {
    fields: modalOptions.fields.map(
      (field): OptionsFieldProps => ({
        ...field,
        value: tableData.details[index][field.name],
      })
    ),
    submitDispatch: (data?) => modalOptions.submitDispatch(data),
  };

  const handleShowModal = () => {
    console.log(options);

    setShowModal(true);
    setShowMenu(false);
  };

  return (
    <Fragment>
      {tableData.columns.map((column, j) => (
        <td key={j}>{data[column.key]}</td>
      ))}
      <td>
        <div className="customTable__action">
          <OverlayTrigger
            show={showMenu}
            trigger="click"
            key="bottom"
            placement="bottom"
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Content className="customTable__popupMenu">
                  <div className="customTable__popupMenuItems">
                    <VisibilityRoundedIcon className="customTable__popupMenuIcon" />{" "}
                    <span>View</span>
                  </div>
                  <div onClick={handleShowModal} className="customTable__popupMenuItems">
                    <CreateRoundedIcon className="customTable__popupMenuIcon" /> <span>Edit</span>
                  </div>
                  <div onClick={handleDistpachDelete} className="customTable__popupMenuItems">
                    <DeleteRoundedIcon className="customTable__popupMenuIcon" /> <span>Delete</span>
                  </div>
                </Popover.Content>
              </Popover>
            }
          >
            <CustomButton
              variant="secondary"
              onClick={() => setShowMenu(!showMenu)}
              className="customTable__button"
            >
              Actions
            </CustomButton>
          </OverlayTrigger>
        </div>
      </td>
      <FinanceModal
        title="Finance Details"
        show={showModal}
        setShow={setShowModal}
        options={options}
        mode="edit"
      />
    </Fragment>
  );
};

const CustomTable: React.FC<Props> = ({ tableData, modalOptions }) => {
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
              <TableRow data={dt} index={i} modalOptions={modalOptions} tableData={tableData} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
