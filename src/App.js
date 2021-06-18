import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/sidebar";
import UserProfile from "./userprofile";
import Home from "./home";

const App = () => {
  return (
    <Router>
      <Home />
      <Switch>
        {/* <Route path="/" exact component={Home}></Route> */}
        <Route path="/userprofile" component={UserProfile}></Route>
      </Switch>
    </Router>
  );
};

export default App;
