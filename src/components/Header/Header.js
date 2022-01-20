// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
// import { faSearch } from '@fortawesome/free-solid-svg-icons'


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
          {/* <div className={classes.searchInput}>
            <input type="text" placeholder="Search  user " />
            <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
          </div> */}
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
              </li>
              <li>
                {/* <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/details"
                >
                   Details
                </NavLink> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
