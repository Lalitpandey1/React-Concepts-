import React from "react";
import Contact from "./Contact";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <Contact />
    </div>
  );
}

export default React.memo(Header);
