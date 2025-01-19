import axios from 'axios';

// Replace API_URL with your backend URL
const API_URL = 'http://localhost:5000';

export const registerStudent = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/student/register`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginStudent = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/student/login`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchStudents = async () => {
  try {
    const response = await axios.get(`${API_URL}/students`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
