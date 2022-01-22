
import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.menu}>
      <div className="container">
        <div className={classes.menuWrapper}>
          <div className={classes.logo}>
            <NavLink style={{ textDecoration: "none" }} to="/">              
              <h4> Anime app </h4>
            </NavLink>
          </div>
          <div className="menuNav">
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  exact
                  // activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/new"
                >
                  Search
                </NavLink>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
