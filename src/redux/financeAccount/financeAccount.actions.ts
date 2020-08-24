import { FinanceAccountDataProps } from "./financeAccount.reducer";
import { getToken, checkAuth } from "../../helpers/request.helper";
import Axios from "axios";

export type FinanceAccountTypes =
  | {
      type: "FINANCE_ACCCOUNT_ADD";
      payload: FinanceAccountDataProps;
    }
  | {
      type: "FINANCE_ACCCOUNT_DELETE";
      payload: string;
    }
  | {
      type: "FINANCE_ACCOUNT_FETCH";
    }
  | {
      type: "FINANCE_ACCOUNT_FETCH_SUCCESS";
      payload: FinanceAccountDataProps[];
    }
  | {
      type: "FINANCE_ACCOUNT_ERROR";
      payload: string;
    };

const apiUrl = process.env.REACT_APP_API_URL;

const fetchFinanceAccountStart = (): FinanceAccountTypes => ({
  type: "FINANCE_ACCOUNT_FETCH",
});

const fetchFinanceAccountSuccess = (data: FinanceAccountDataProps[]): FinanceAccountTypes => ({
  type: "FINANCE_ACCOUNT_FETCH_SUCCESS",
  payload: data,
});

export const financeAccountDelete = (id: number) => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceAccountStart());
    await Axios.delete(apiUrl + "/finance-accounts/" + id, tokenHeader);
    dispatch(fetchFinanceAccountStartAsync());
  };
};

export const fetchFinanceAccountStartAsync = () => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceAccountStart());
    await Axios.get(
      process.env.REACT_APP_API_URL + "/finance-accounts?sort_field=id&sort_type=0",
      tokenHeader
    )
      .then((fetchedData) => dispatch(fetchFinanceAccountSuccess(fetchedData.data.data)))
      .catch((err) => {
        checkAuth(err.response.status, dispatch);
      });
  };
};

const fetchFinanceAccountError = (data: string): FinanceAccountTypes => ({
  type: "FINANCE_ACCOUNT_ERROR",
  payload: data,
});

export const financeAccountAdd = (data, edit) => {
  return async (dispatch) => {
    const tokenHeader = getToken();
    dispatch(fetchFinanceAccountStart());
    const postedData = {
      name: data.name,
      type: data.type,
      descrp: Number(data.debit_amount),
      description: data.description,
      finance_account_id: 1,
    };
    await Axios[edit ? "patch" : "post"](
      `${apiUrl}/finance-accounts${edit ? `/${data.id}` : ""}`,
      JSON.stringify(postedData),
      tokenHeader
    ).catch((err) => {
      checkAuth(err.response.status, dispatch);
      dispatch(fetchFinanceAccountError(err.message));
    });
    dispatch(fetchFinanceAccountStartAsync());
  };
};
