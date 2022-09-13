import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
      <nav>
        <NavLink to="/">Countries</NavLink>
        <NavLink to="/standings">Standings</NavLink>
      </nav>
    );
}
export default Nav