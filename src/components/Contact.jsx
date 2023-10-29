import React from "react";

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact US</h1>
        <form>
          <div>
            <label for="name">Name</label>
            <input type="text" placeholder="Abc" id="name" required />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              placeholder="Abc@gmail.com"
              id="email"
              required
            />
          </div>

          <div>
            <label for="message">Message</label>
            <input
              type="text"
              placeholder="Tell me about Query.."
              id="message"
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
