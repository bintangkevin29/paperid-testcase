export type AuthActions =
  | {
      type: "AUTH_FETCH_START";
    }
  | {
      type: "AUTH_FETCH_SUCCESS";
      payload: Object;
    };
