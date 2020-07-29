import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Members from "./components/Members";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Members />
          </Route>
          <Route exact path="/profile/:userId">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
