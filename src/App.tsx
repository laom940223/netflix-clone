import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { DetailVideo } from "./pages/DetailVideo";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { MyAccount } from "./pages/MyAccount";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/" exact>
          <Main />
        </ProtectedRoute>

        <ProtectedRoute path="/my-account" exact>
          <MyAccount />
        </ProtectedRoute>

        <ProtectedRoute path="/video" exact>
          <DetailVideo />
        </ProtectedRoute>

        <Route path="/login" component={Login} exact />

        <Route path="/">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
