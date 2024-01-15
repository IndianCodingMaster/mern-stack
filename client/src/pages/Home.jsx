import React, { useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(name, email, phone, message);
  };

  return (
    <div className="mainContainer">
      <h3>Please enter your details</h3>
      <form action="/" className="formContainer" onSubmit={submitForm}>
        <div className="eachDiv">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="eachDiv">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="eachDiv">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="eachDiv">
          <label htmlFor="message">message:</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
