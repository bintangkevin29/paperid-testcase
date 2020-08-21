import thunk from "redux-thunk";
import logger from "redux-logger";
import Redux, { createStore, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";

const middlewares: Redux.Middleware[] = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export default createStore(rootReducer, applyMiddleware(...middlewares));
