import { FinanceTransactionsDataNode } from "./financeTransactions.reducer";
import { getToken } from "../../helpers/request.helper";
import Axios from "axios";

interface FinanceTransactionsInputData {
  title: string;
  debit_amount: number;
  credit_amount: number;
  description: string;
  finance_account_id: number;
}

const apiUrl = process.env.REACT_APP_API_URL;

export type FinanceTransactionsTypes =
  | {
      type: "FINANCE_TRANSACTIONS_FETCH";
    }
  | {
      type: "FINANCE_TRANSACTIONS_FETCH_SUCCESS";
      payload: FinanceTransactionsDataNode[];
    }
  | {
      type: "FINANCE_TRANSACTIONS_ADD";
      payload: FinanceTransactionsInputData;
    };

const fetchFinanceTransactionsStart = (): FinanceTransactionsTypes => ({
  type: "FINANCE_TRANSACTIONS_FETCH",
});

const fetchFinanceTransactionsSuccess = (
  data: FinanceTransactionsDataNode[]
): FinanceTransactionsTypes => ({
  type: "FINANCE_TRANSACTIONS_FETCH_SUCCESS",
  payload: data,
});

export const fetchFinanceTransactionsStartAsync = () => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceTransactionsStart());
    const fetchedData = await Axios.get(
      process.env.REACT_APP_API_URL + "/finances?sort_field=id&sort_type=0",
      tokenHeader
    );
    dispatch(fetchFinanceTransactionsSuccess(fetchedData.data.data));
  };
};

export const financeTransactionsDelete = (id: number) => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceTransactionsStart());
    await Axios.delete(apiUrl + "/finances/" + id, tokenHeader);
    dispatch(fetchFinanceTransactionsStartAsync());
  };
};

export const financeTransactionsAdd = (data) => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceTransactionsStart());
    const postedData = {
      title: data.title,
      debit_amount: Number(data.debit_amount),
      credit_amount: Number(data.debit_amount),
      description: data.description,
      finance_account_id: 1,
    };
    await Axios.post(apiUrl + "/finances", postedData, tokenHeader);
    dispatch(fetchFinanceTransactionsStartAsync());
  };
};
