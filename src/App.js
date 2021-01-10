import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleMovie1 from "./pages/SingleMovie1";
import Error from "./pages/Error";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/movie/:id">
          <SingleMovie1></SingleMovie1>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
