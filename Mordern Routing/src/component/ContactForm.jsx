import React from "react";

function ContactForm() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <textarea placeholder="Message"></textarea>
        <br />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default ContactForm;
