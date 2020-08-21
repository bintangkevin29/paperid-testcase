import React from "react";
import "./App.scss";
import LoginPage from "./pages/LoginPage";
import { Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </div>
  );
};

export default App;
