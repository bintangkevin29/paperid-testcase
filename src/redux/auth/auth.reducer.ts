import { AuthActions } from "./auth.actions";

export interface AuthStateProps {
  name: string | undefined;
  isFetching: boolean;
  token: string | undefined;
  errMsg: string | undefined;
}

const INIT_STATE: AuthStateProps = {
  name: undefined,
  isFetching: false,
  token: undefined,
  errMsg: undefined,
};

const authReducer = (
  state: AuthStateProps = INIT_STATE,
  action: AuthActions
): AuthStateProps => {
  switch (action.type) {
    case "AUTH_FETCH_START":
      return {
        ...state,
        isFetching: true,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        isFetching: false,
        errMsg: action.payload,
      };
    case "AUTH_FETCH_SUCCESS":
      return {
        ...state,
        isFetching: false,
        errMsg: undefined,
        name: action.payload.name,
        token: action.payload.token,
      };
    case "AUTH_FLUSH":
      return {
        ...state,
        name: undefined,
        token: undefined,
      };
    default:
      return state;
  }
};

export default authReducer;
