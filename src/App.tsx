import React, { useEffect } from "react";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import { Route, useHistory } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";
import { useSelector } from "react-redux";
import { RootState } from "./redux/root.reducer";
import MainLayout from "./components/MainLayout";

const App: React.FC = () => {
  const userToken = useSelector((state: RootState) => state.auth.token);
  const history = useHistory();

  useEffect(() => {
    if (userToken) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  interface ModuleNodes {
    component: React.FC;
    url: string;
  }

  const modules: ModuleNodes[] = [
    {
      component: DashboardPage,
      url: "/",
    },
  ];

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
