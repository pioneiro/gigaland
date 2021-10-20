import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

const Page404 = () => <h1>404 Not Found</h1>;

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="*" component={Page404} />
    </Switch>
  </Router>
);

export default App;
