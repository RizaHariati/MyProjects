import React from "react";
import { Link } from "react-router-dom";
import { nav_menu } from "../data/data_menu";
import { useGlobalContext } from "../context";

const Nav = () => {
  const { isSubmenu, showSubmenu, hideSubmenu } = useGlobalContext();
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/assets/images/logo white.jpg" alt="logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <button className="nav-btn emergency">
            <i className="fa fa-ambulance"></i>
            ambulans <span> (0721)700323 </span>
          </button>
        </li>

        <li className="nav-menu">
          <button className="nav-btn" onClick={() => showSubmenu()}>
            <i className="fa fa-bars"></i>menu
          </button>
        </li>

        <li>
          <Link to="/" className="main-link" onClick={() => hideSubmenu()}>
            <button className="nav-btn">
              <i className="fa fa-home" style={{ fontSize: "2rem" }}>
                <span></span>
              </i>
            </button>
          </Link>
        </li>
      </ul>
      {isSubmenu && <Submenu />}
    </nav>
  );
};

export default Nav;

const Submenu = () => {
  const { hideSubmenu } = useGlobalContext();
  return (
    <div className="nav-submenu">
      <button className="nav-link-close" onClick={() => hideSubmenu()}>
        <i className="fa fa-times"></i>
      </button>
      <div className="nav-social">
        <a href="https://www.instagram.com/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
      <div className="nav-link">
        {nav_menu.map((data) => {
          const { index, link, path } = data;
          return (
            <div key={index} className="nav-link-list">
              <Link
                to={path}
                className="nav-link-to"
                onClick={() => hideSubmenu()}
              >
                {link}
              </Link>
              <div className="line"></div>
            </div>
          );
        })}
      </div>
      <div className="nav-wave">
        <img src="/assets/images/wave.jpg" alt="wave" />
      </div>
    </div>
  );
};
