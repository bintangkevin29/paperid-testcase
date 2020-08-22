import { FinanceAccountDataProps } from "./financeAccount.reducer";

export type FinanceAccountTypes =
  | {
      type: "FINANCE_ACCCOUNT_ADD";
      payload: FinanceAccountDataProps;
    }
  | {
      type: "FINANCE_ACCCOUNT_DELETE";
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
