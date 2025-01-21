import React, { useState } from "react";
import { registerStudent } from "../api/studentApi";

const StudentRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerStudent({ email, password });
      console.log("Student Registered:", response);
      alert("Student registered successfully!");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Failed to register Student.");
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegister;
