import React, { ReactNode } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { RootState } from "../../redux/root.reducer";
import { useSelector } from "react-redux";

interface Props {
  exact?: boolean;
  path: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({ exact = false, path, children }) => {
  const location = useLocation();
  const token = useSelector((state: RootState) => state.auth.token);
  const encodedUrl = encodeURIComponent(location.pathname);
  return (
    <Route exact={exact} path={path}>
      {token ? children : <Redirect to={`/login?redirect=${encodedUrl}`} />}
    </Route>
  );
};

export default ProtectedRoute;
