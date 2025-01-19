import axios from 'axios';

// Replace API_URL with your backend URL
const API_URL = 'http://localhost:5000';

export const loginAdmin = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/admin/login`, credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const registerAdmin = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/admin/register`, credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchStudents = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/students`);
        return response.data;
    } catch (error) {
        throw error;
     }
};
