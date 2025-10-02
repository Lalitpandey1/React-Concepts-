import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Footer() {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>Footer</h1>
      <h2>Number : {context.phone}</h2>
    </div>
  );
}

export default Footer;
