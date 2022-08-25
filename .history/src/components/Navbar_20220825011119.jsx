import React from "react";
import "../App";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1>React Book App</h1>
      </div>
      <div>
        <h1>Your Favorites</h1>
      </div>
    </div>
  );
};

export default Navbar;
