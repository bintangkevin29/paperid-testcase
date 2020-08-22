import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth.reducer";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
