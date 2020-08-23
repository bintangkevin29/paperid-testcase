import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import authReducer from "./auth/auth.reducer";
import financeAccountReducer from "./financeAccount/financeAccount.reducer";
import financeTransactionsReducer from "./financeTransactions/financeTransactions.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  financeAccount: financeAccountReducer,
  financeTransactions: financeTransactionsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
