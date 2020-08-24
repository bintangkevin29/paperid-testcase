import { FinanceTransactionsDataNode } from "./financeTransactions.reducer";
import { getToken, checkAuth } from "../../helpers/request.helper";
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
    }
  | {
      type: "FINANCE_TRANSACTIONS_ERROR";
      payload: string;
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

const fetchFinanceTransactionsError = (data: string): FinanceTransactionsTypes => ({
  type: "FINANCE_TRANSACTIONS_ERROR",
  payload: data,
});

export const fetchFinanceTransactionsStartAsync = () => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceTransactionsStart());
    await Axios.get(
      process.env.REACT_APP_API_URL + "/finances?sort_field=id&sort_type=0",
      tokenHeader
    )
      .then((fetchedData) => dispatch(fetchFinanceTransactionsSuccess(fetchedData.data.data)))
      .catch((err) => {
        checkAuth(err.response.status, dispatch);
      });
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

export const financeTransactionsAdd = (data, edit) => {
  return async (dispatch) => {
    dispatch(fetchFinanceTransactionsError(""));
    const tokenHeader = getToken();
    dispatch(fetchFinanceTransactionsStart());
    const postedData = {
      title: data.title,
      debit_amount: Number(data.debit_amount),
      credit_amount: Number(data.debit_amount),
      description: data.description,
      finance_account_id: 1,
    };
    await Axios[edit ? "patch" : "post"](
      `${apiUrl}/finances${edit ? `/${data.id}` : ""}`,
      JSON.stringify(postedData),
      tokenHeader
    ).catch((err) => {
      checkAuth(err.response.status, dispatch);
      dispatch(fetchFinanceTransactionsError(err.message));
    });
    dispatch(fetchFinanceTransactionsStartAsync());
  };
};
