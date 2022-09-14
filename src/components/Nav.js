import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
      <nav>
        <NavLink to="/">Countries</NavLink>
            <NavLink to="/standings">Standings</NavLink>
            <NavLink to="/prediction">Prediction</NavLink>
      </nav>
    );
}
export default Nav