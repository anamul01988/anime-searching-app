
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Selected from "./components/Details/Details";
function App() {
  return (
    <Router>
   <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
          <Route exact path="/Details/:image_url">
          <Selected />
        </Route>
        {/* <Route exact path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
