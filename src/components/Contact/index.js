import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

function ContacForm() {
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <htmlFor htmlFor="name">Name:</htmlFor>
          <input type="text" name="name" />
        </div>
        <div>
          <htmlFor htmlFor="email">Email address:</htmlFor>
          <input type="email" name="email" />
        </div>
        <div>
          <htmlFor htmlFor="message">Message:</htmlFor>
          <textarea name="message" rows="5" />
        </div>{" "}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContacForm;
