import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Contact() {
  const context = useContext(AppContext);
  return (
    <div>
      <h1>Contact</h1>
      <h2>Name : {context.name}</h2>
      <h2>Phone : {context.phone}</h2>
    </div>
  );
}

export default Contact;
