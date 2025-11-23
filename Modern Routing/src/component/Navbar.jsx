import React from "react";
import logo from "../logo.png";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img src={logo} alt="" width={"50px"} />
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>

        <li>
          <NavLink to={"/product"}>Product</NavLink>
        </li>

        <NavLink to={"/about"}>About</NavLink>

        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>

        <li>
          <NavLink to={"/jobs"}>Jobs</NavLink>
        </li>
      </ul>
      <button
        onClick={() => {
          navigate("/about", { replace: true });
          //Only replaces the a single page not the whole history
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Navbar;
