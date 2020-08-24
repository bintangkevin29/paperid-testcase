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

export const financeAccountAdd = (data: FinanceAccountDataProps): FinanceAccountTypes => ({
  type: "FINANCE_ACCCOUNT_ADD",
  payload: data,
});

export const financeAccountDelete = (id: string): FinanceAccountTypes => ({
  type: "FINANCE_ACCCOUNT_DELETE",
  payload: id,
});

const fetchFinanceAccountStart = (): FinanceAccountTypes => ({
  type: "FINANCE_ACCOUNT_FETCH",
});

const fetchFinanceAccountSuccess = (data: FinanceAccountDataProps[]): FinanceAccountTypes => ({
  type: "FINANCE_ACCOUNT_FETCH_SUCCESS",
  payload: data,
});

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
