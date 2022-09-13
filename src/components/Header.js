import React from "react";
import Nav from "./Nav";
function Header() {
    return (
      <div className="header">
        <div className="">
          {/* <img src="../image/sportbeticon.png" /> */}
          <h2>SPORTBET</h2>
          <p>Executive Betting site</p>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    );
}
export default Header