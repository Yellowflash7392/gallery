import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div style={{"marginBottom":"70px"}} >
            <NavLink exact to="/" className="nav-logo">
              <p> Library</p>
              <div className="search_box_div" >
                <input className="search_box" type="text" placeholder="Search all photos" />
              </div>
            </NavLink>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ALL Photos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/architecture"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                💰Architecture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dummy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                🏔 Kashmir
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dummy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                ⛵️ Seaside
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dummy"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                🐟 Lake view
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
