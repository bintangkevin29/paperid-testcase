import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useHistory, useLocation, Switch } from "react-router-dom";

import "./App.scss";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";

import { RootState } from "./redux/root.reducer";

import MainLayout from "./components/MainLayout";
import FinanceAcountPage from "./pages/FinanceAcountPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import FinancePage from "./pages/FinancePage";
import FinanceTransactionsPage from "./components/FinanceTransactionsPage";

export interface ModuleNodes {
  component: React.FC;
  url: string;
  pageTitle: string;
  name: string;
  icon?: string;
  childModule?: ModuleNodes[];
}

export const modules: ModuleNodes[] = [
  {
    component: DashboardPage,
    url: "/",
    name: "Dashboard",
    icon: require("./assets/images/dashboard.svg"),
    pageTitle: "Dashboard",
  },
  {
    component: FinancePage,
    url: "/finance",
    pageTitle: "Finance",
    icon: require("./assets/images/finance.svg"),
    name: "Finance",
    childModule: [
      {
        component: FinanceAcountPage,
        url: "/finance/account",
        pageTitle: "All Finance Account",
        name: "Account",
      },
      {
        component: FinanceTransactionsPage,
        url: "/finance/transaction",
        pageTitle: "All Finance Transactions",
        name: "Transactions",
      },
    ],
  },
];

const App: React.FC = () => {
  const userToken = useSelector((state: RootState) => state.auth.token);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (userToken && location.pathname === "/login") {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path={modules.map((module) => module.url)}>
          <MainLayout>
            {modules.map((module, i) => {
              const ChildComponent = module.component;
              return (
                <ProtectedRoute key={i} exact={module.childModule ? false : true} path={module.url}>
                  <ChildComponent />
                </ProtectedRoute>
              );
            })}
          </MainLayout>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
