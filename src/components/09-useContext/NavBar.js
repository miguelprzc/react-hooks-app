import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          useContextApp
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/"  className={`nav-link ${ (navData) => navData.isActive && 'active' }`}  aria-current="page">
              Home
            </NavLink>
            <NavLink to="/about"  className={`nav-link ${ (navData) => navData.isActive && 'active' }`} >
              About
            </NavLink>
            <NavLink to="/login"  className={`nav-link ${ (navData) => navData.isActive && 'active' }`} >
              Login
            </NavLink>
          </div>
        </div>
    </nav>
  );
};
