
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
function App() {
  return (
    <Router>
   <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
          <Route path="/details/:id" component={Details}/>
      </Switch>
    </Router>
  );
}

export default App;
