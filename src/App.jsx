import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/Home";

import Page404 from "./components/Page404.jsx";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/404" exact component={Page404} />
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  </Router>
);

export default App;
