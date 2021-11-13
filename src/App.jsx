import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Web3ContextProvider from "./utils/web3context.js";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import Create from "./pages/Create";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Page404 from "./components/Page404.jsx";

const App = () => (
  <Router>
    <ScrollToTop />
    <Web3ContextProvider>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/wallet" exact component={Wallet} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/create" exact component={Create} />
        <Route path="/404" exact component={Page404} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Web3ContextProvider>
  </Router>
);

export default App;
