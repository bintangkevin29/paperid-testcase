import React, { ReactNode } from "react";
import { Route } from "react-router-dom";
// import { Route, Redirect } from "react-router-dom";
// import { RootState } from "../../redux/root.reducer";
// import { useSelector } from "react-redux";

interface Props {
  exact?: boolean;
  path: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ exact = false, path, children }) => {
  // const token = useSelector((state: RootState) => state.auth.token);
  return (
    <Route exact={exact} path={path}>
      {/* {token ? children : <Redirect to="/login" />} */}
      {children}
    </Route>
  );
};

export default ProtectedRoute;
