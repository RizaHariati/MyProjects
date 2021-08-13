import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/assets/images/logo white.jpg" alt="logo" />
      </Link>
    </nav>
  );
};

export default Nav;
