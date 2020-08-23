import { FinanceTransactionsDataNode } from "./financeTransactions.reducer";
import { Dispatch } from "redux";
import { getToken } from "../../helpers/request.helper";
import Axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export type FinanceTransactionsTypes =
  | {
      type: "FINANCE_TRANSACTIONS_FETCH";
    }
  | {
      type: "FINANCE_TRANSACTIONS_FETCH_SUCCESS";
      payload: FinanceTransactionsDataNode[];
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
      process.env.REACT_APP_API_URL + "/finances?sort_field=id",
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
