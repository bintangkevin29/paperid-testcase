import { FinanceAccountTypes } from "./financeAccount.actions";

export interface FinanceAccountDataProps {
  id: string;
  name: string;
  description: string;
  type: string;
  last_modified: string;
  created_at: string;
  deleted_at: string | null;
}
interface FinanceAccountProps {
  data: FinanceAccountDataProps[];
}

const INIT_STATE: FinanceAccountProps = {
  data: [
    {
      id: "1",
      name: "Sarapan Expense",
      description: "biaya buat sarapan",
      type: "expense",
      last_modified: "2020-05-20 07:00:05",
      created_at: "2020-05-20 06:50:05",
      deleted_at: null,
    },
    {
      id: "2",
      name: "Sarapan Expense",
      description: "biaya buat sarapan",
      type: "expense",
      last_modified: "2020-05-20 07:00:05",
      created_at: "2020-05-20 06:50:05",
      deleted_at: null,
    },
  ],
};

const financeAccountReducer = (state = INIT_STATE, action: FinanceAccountTypes) => {
  switch (action.type) {
    case "FINANCE_ACCCOUNT_ADD":
      return {
        ...state,
        data: [...state.data, { ...action.payload }],
      };
    case "FINANCE_ACCCOUNT_DELETE":
      return {
        ...state,
        data: state.data.filter((dt) => dt.id !== action.payload),
      };
    default:
      return state;
  }
};

export default financeAccountReducer;
