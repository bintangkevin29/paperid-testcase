import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";

import { RootState } from "./redux/root.reducer";

import MainLayout from "./components/MainLayout";
import FinancePage from "./pages/FinancePage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";

import "./App.scss";

interface ModuleNodes {
  component: React.FC;
  url: string;
  title: string;
}

export const modules: ModuleNodes[] = [
  {
    component: DashboardPage,
    url: "/",
    title: "Dashboard",
  },
  {
    component: FinancePage,
    url: "/finance",
    title: "Finance",
  },
];

const App: React.FC = () => {
  const userToken = useSelector((state: RootState) => state.auth.token);
  const history = useHistory();

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <div className="App">
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path={modules.map((module) => module.url)}>
        <MainLayout>
          {modules.map((module, i) => {
            const ChildComponent = module.component;
            return (
              <ProtectedRoute key={i} exact path={module.url}>
                <ChildComponent />
              </ProtectedRoute>
            );
          })}
        </MainLayout>
      </Route>
    </div>
  );
};

export default App;
