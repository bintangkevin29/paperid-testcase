import { customFetch } from "../../helpers/request.helper";

interface UserNodes {
  name: string;
  token: string;
}

export type AuthActions =
  | {
      type: "AUTH_FETCH_START";
    }
  | {
      type: "AUTH_FETCH_SUCCESS";
      payload: UserNodes;
    }
  | {
      type: "AUTH_ERROR";
      payload: string | undefined;
    }
  | {
      type: "AUTH_FLUSH";
    };

const fetchLoginStartFetching = (): AuthActions => ({
  type: "AUTH_FETCH_START",
});

export const fetchLoginError = (data: string | undefined): AuthActions => ({
  type: "AUTH_ERROR",
  payload: data,
});

const fetchLoginSuccess = (data: UserNodes): AuthActions => ({
  type: "AUTH_FETCH_SUCCESS",
  payload: {
    name: data.name,
    token: data.token,
  },
});

const flushAuthData = (): AuthActions => ({
  type: "AUTH_FLUSH",
});

export const fetchLoginStart = (loginData: object) => {
  return async (dispatch) => {
    dispatch(flushAuthData());
    dispatch(fetchLoginStartFetching());
    const response = await customFetch(
      process.env.REACT_APP_API_URL + "/login",
      loginData,
      "post"
    );

    if (response.hasError) {
      dispatch(fetchLoginError(response.message));
    } else dispatch(fetchLoginSuccess(response.data));
  };
};
