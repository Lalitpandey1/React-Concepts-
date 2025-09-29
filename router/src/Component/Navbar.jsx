import React from "react";
import logo from "../../public/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" width={"50px"} />
      <ul>
        <li>
          <Link to={"./"}>Home</Link>
        </li>
        <li>
          <Link to={"./product"}>Product</Link>
        </li>
        <li>
          <Link to={"./about"}>About</Link>
        </li>
        <li>
          <Link to={"./contact"}>Contact</Link>
        </li>
      </ul>
      <button>Get Started</button>
    </div>
  );
}

export default Navbar;
