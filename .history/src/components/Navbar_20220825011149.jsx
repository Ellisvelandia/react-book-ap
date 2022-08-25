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
        <Link></Link>
      </div>
    </div>
  );
};

export default Navbar;
