import { FinanceAccountTypes } from "./financeAccount.actions";

export interface FinanceAccountDataProps {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  name: string;
  Description: string;
  type: string;
  last_modified: string;
}
interface FinanceAccountProps {
  isFetching: boolean;
  errorMessage: string | undefined;
  data: FinanceAccountDataProps[];
}

const INIT_STATE: FinanceAccountProps = {
  isFetching: false,
  errorMessage: undefined,
  data: [],
};

const financeAccountReducer = (state = INIT_STATE, action: FinanceAccountTypes) => {
  switch (action.type) {
    case "FINANCE_ACCOUNT_FETCH":
      return {
        ...state,
        isFetching: true,
      };
    case "FINANCE_ACCOUNT_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case "FINANCE_ACCOUNT_ERROR":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default financeAccountReducer;
