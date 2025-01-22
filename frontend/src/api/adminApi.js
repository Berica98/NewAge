import axios from 'axios';

// Use environment variable for flexibility, with a fallback for local development
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const loginAdmin = async (credentials) => {
    const response = await axios.post(`${API_URL}/admin/login`, credentials);
    return response.data;
};

export const registerAdmin = async (credentials) => {
    const response = await axios.post(`${API_URL}/admin/register`, credentials);
    return response.data;
};

export const fetchStudents = async () => {
    const response = await axios.get(`${API_URL}/admin/students`);
    return response.data;
};
