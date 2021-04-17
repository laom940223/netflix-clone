import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />

        <Route path="/login" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
