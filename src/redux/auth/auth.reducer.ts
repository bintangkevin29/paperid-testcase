import { AuthActions } from "./auth.actions";

export interface AuthStateProps {
  userId: string | null;
  isFetching: boolean | null;
  token: string | null;
}

const INIT_STATE: AuthStateProps = {
  userId: null,
  isFetching: false,
  token: null,
};

const authReducer = (
  state: AuthStateProps = INIT_STATE,
  action: AuthActions
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
