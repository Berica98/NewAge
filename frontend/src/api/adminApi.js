import axios from 'axios';

// Directly set the deployed backend URL instead of using the environment variable
const API_URL = 'https://newage-backend.vercel.app';  

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
