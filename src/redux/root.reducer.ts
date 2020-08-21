import { combineReducers } from "redux";

import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
