import React, { useState } from 'react';
import { registerAdmin } from '../api/adminApi';

const AdminRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerAdmin({ email, password });
            console.log('Admin Registered:', response);
            alert('Admin registered successfully!');
            setEmail(''); // Clear inputs after success
            setPassword('');
        } catch (error) {
            if (error.response && error.response.data) {
                console.error('Registration failed:', error.response.data);
                alert(error.response.data.message || 'Failed to register Admin.');
            } else {
                console.error('Registration failed:', error.message);
                alert('Failed to register Admin.');
            }
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
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
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default AdminRegister;
