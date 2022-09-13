import React from "react";
import {Routes, Route} from "react-router-dom"
// import { NavLink } from "react-router-dom";
import "../App.css";
import Countries from "./Countries";
import Standings from "./Standings";
import Nav from "./Nav";
function Home() {
   



    return (
      <div className="home">
        <div className="card">
          <p className="hide"> Hide </p>
          <Nav />
        </div>
        <div className="view">
          <div>
            <Routes>
              <Route exact path="/" element={<Countries />}></Route>
              <Route exact path="/standings" element={<Standings />}></Route>
            </Routes>
          </div>
        </div>
        <div className="slip">
          <h2 className="sliphead">Bet Slip</h2>
        </div>
      </div>
    );
}
export default Home