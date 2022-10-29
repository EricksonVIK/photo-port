import React from "react";
import { useState } from "react";

function ContacForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <htmlFor htmlFor="name">Name:</htmlFor>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <htmlFor htmlFor="email">Email address:</htmlFor>
          <input
            type="email"
            defaultValue={email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <htmlFor htmlFor="message">Message:</htmlFor>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>{" "}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContacForm;
