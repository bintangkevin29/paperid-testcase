import { FinanceTransactionsTypes } from "./financeTransactions.actions";

export interface FinanceTransactionsDataNode {
  id: number;
  created_at: string;
  updated_at: string;
  deleted_at: null | string;
  title: string;
  debit_amount: number;
  credit_amount: number;
  description: string;
  finance_account_type: string;
  finance_account_name: string;
  finance_account_id: number;
  last_modified: string;
}

interface FinanceTransactionsStateNode {
  isFetching: boolean;
  errorMessage: string | undefined;
  data: FinanceTransactionsDataNode[];
}

const INIT_STATE = {
  isFetching: false,
  errorMessage: undefined,
  data: [],
};

const financeTransactionsReducer = (
  state: FinanceTransactionsStateNode = INIT_STATE,
  action: FinanceTransactionsTypes
): FinanceTransactionsStateNode => {
  switch (action.type) {
    case "FINANCE_TRANSACTIONS_FETCH":
      return {
        ...state,
        isFetching: true,
      };
    case "FINANCE_TRANSACTIONS_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case "FINANCE_TRANSACTIONS_ERROR":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default financeTransactionsReducer;
