
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
