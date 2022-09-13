import React from "react";
// import { NavLink } from "react-router-dom";
import "../App.css";
import Countries from "./Countries";
function Home() {
   



    return (
      <div className="home">
        <div className="card">
          <p className="hide"> Hide </p>
                <nav>
                {/* <NavLink to="/">Countries</NavLink> */}
                </nav> 
         
        </div>
        <div className="view">
                <div>
                  <Countries />
                </div> 
        </div>
        <div className="slip">
          <h2 className="sliphead">Bet Slip</h2>
        </div>
      </div>
    );
}
export default Home