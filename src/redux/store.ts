import thunk from "redux-thunk";
import logger from "redux-logger";
import Redux, { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import { persistStore } from "redux-persist";

const middlewares: Redux.Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persist = persistStore(store);
