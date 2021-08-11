import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { refHome, refProjects, refAbout, homeOn, projectOn, aboutOn } =
    useGlobalContext();
  return (
    <nav className="navbar">
      <header className="header">
        <div className="s-header">
          <a className="social-btn" href="https://github.com/RizaHariati">
            <i className="fa fa-github-square"></i>
          </a>
          <a
            className="social-btn"
            href="https://www.instagram.com/rizahariati/?hl=en"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="social-btn"
            href="https://www.linkedin.com/in/riza-hariati-2021/"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </div>
        <h2>
          Azri <span>Coding</span>
        </h2>
      </header>
      <div className="pages">
        <Link to="/" className="page" onClick={() => homeOn()}>
          <p ref={refHome}>home</p>
        </Link>
        <Link to="/projects" className="page" onClick={() => projectOn()}>
          <p ref={refProjects}>projects</p>
        </Link>
        <Link to="/about" className="page" onClick={() => aboutOn()}>
          <p ref={refAbout}>about</p>
        </Link>
      </div>
      <div className="socials">
        <a className="social-btn" href="https://github.com/RizaHariati">
          <i className="fa fa-github-square"></i>
        </a>
        <a
          className="social-btn"
          href="https://www.instagram.com/rizahariati/?hl=en"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          className="social-btn"
          href="https://www.linkedin.com/in/riza-hariati-2021/"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <div className="power">
          <p>powered by ReactJS</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
