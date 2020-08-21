import React, { useEffect } from "react";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import { Route, useHistory } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root.reducer";

const App: React.FC = () => {
  
  const userToken = useSelector((state: RootState) => state.auth.token);
  const history = useHistory();
  useEffect(() => {
    console.log(userToken);

    if (userToken) {
      console.log("cok");
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <div className="App">
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <ProtectedRoute exact path="/">
        <DashboardPage />
      </ProtectedRoute>
    </div>
  );
};

export default App;
