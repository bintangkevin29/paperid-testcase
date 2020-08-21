import { AuthActions } from "./auth.actions";

interface StateProps {
  userId: string | null;
  isFetching: boolean | null;
  token: string | null;
}

const INIT_STATE: StateProps = {
  userId: null,
  isFetching: false,
  token: null,
};

const authReducer = (state: StateProps = INIT_STATE, action: AuthActions) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
