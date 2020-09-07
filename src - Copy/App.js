import React from "react";
import "./App.css";
import Navi from "./components/display/Navi";
import Frontpage from "./components/display/Frontpage";
import Signup from "./components/user/Signup";
import Login from "./components/user/Login";
import Logout from "./components/user/Logout";
import Myspace from "./components/user/Myspace";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navi />
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route path="/user/signup" component={Signup} />
        <Route path="/user/login" component={Login} />
        <Route path="/user/logout" component={Logout} />
        <Route path="/user/me" component={Myspace} />
      </Switch>
    </Router>
  );
};

export default App;
