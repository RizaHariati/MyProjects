import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header className="header">
        <h2>
          Azri <span>Coding</span>
        </h2>
      </header>
      <div className="pages">
        <Link to="/" className="page">
          <p>home</p>
        </Link>
        <Link to="/projects" className="page">
          <p>projects</p>
        </Link>
        <Link to="/about" className="page">
          <p>about</p>
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
      </div>
    </nav>
  );
};

export default Navbar;
