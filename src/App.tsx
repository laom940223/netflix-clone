import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact>
          <Main />
        </ProtectedRoute>

        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
