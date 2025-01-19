import React, { useState } from "react";
import { loginStudent } from "../api/studentApi";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginStudent({ email, password });
      console.log("Student Logged In:", response);
      alert("Student logged in successfully!");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Failed to log in as Student.");
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLogin;
