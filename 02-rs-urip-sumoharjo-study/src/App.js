import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Promo from "./component-main/Promo";
import About from "./pages/About";
import Main1 from "./pages/Main1";
import Main2 from "./pages/Main2";
import Nav from "./component-main/Nav";
const App = () => {
  return (
    <Router>
      <div className="main-container">
        <Promo />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Main1 />
          </Route>
          <Route path="/home">
            <Main2 />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <footer className="footer"></footer>
      </div>
    </Router>
  );
};

export default App;
