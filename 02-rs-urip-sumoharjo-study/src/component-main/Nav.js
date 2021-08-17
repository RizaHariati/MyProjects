import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { nav_menu } from "../data_menu";
const Nav = () => {
  const { showNavLink, isSubmenu } = useGlobalContext();
  const handleMouse = (e) => {
    const id = e.currentTarget.id;
    e.preventDefault();
    const location = e.currentTarget.getBoundingClientRect();
    const right = location.right;
    const left = location.left;
    const width = e.view.innerWidth;

    const position = width - location.width - (right + left) / 2;

    showNavLink(id, position);
  };
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/assets/images/logo white.jpg" alt="logo" />
      </Link>
      <ul className="nav-links">
        {nav_menu.map((menu) => {
          const { id, btn, icon, title } = menu;
          return (
            <li key={id} id={id} onMouseOver={(e) => handleMouse(e)}>
              <button className={btn}>
                <i className={icon}></i>
                {title}
              </button>
            </li>
          );
        })}
        <li>
          <button className="nav-btn">
            <Link to="/" className="main-link">
              <i className="fa fa-home"></i>
              home
            </Link>
          </button>
        </li>
        {isSubmenu && <Submenu />}
      </ul>
    </nav>
  );
};

export default Nav;

const Submenu = () => {
  const { submenuContent, location } = useGlobalContext();

  return (
    <ul className="nav-link" style={{ right: `${location}px` }}>
      {submenuContent.map((submenu) => {
        const { index, link, path } = submenu;
        return (
          <li key={index}>
            <Link className="main-link" to={path}>
              {link}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
