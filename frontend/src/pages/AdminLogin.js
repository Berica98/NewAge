import React, { useState } from 'react';
import { loginAdmin } from '../api/adminApi';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAdmin({ email, password });
      console.log('Admin Logged In:', response);
      alert('Admin logged in successfully!');
      // Redirect to dashboard or perform additional actions
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Login failed:', error.response.data);
        alert(error.response.data.message || 'Failed to log in.');
      } else {
        console.error('Login failed:', error.message);
        alert('Failed to log in.');
      }
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
