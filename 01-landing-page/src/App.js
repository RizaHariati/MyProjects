import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Mode from "./Mode";
const App = () => {
  return (
    <Router className="main-document">
      <div className="background-img">
        <img src="/assets/images/johannes_plenio.jpg" alt="background" />
        <div className="color"></div>
      </div>
      <div className="container">
        <Mode />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="*">
          <Error/>
        </Route> */}
        </Switch>
      </div>
      <footer className="footer">
        background design by johannes plenio from pexels
      </footer>
    </Router>
  );
};

export default App;
