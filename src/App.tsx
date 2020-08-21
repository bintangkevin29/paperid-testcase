import React from "react";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component";

const App: React.FC = () => {
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
