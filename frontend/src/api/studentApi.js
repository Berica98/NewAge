import axios from 'axios';

// Replace API_URL with your backend URL
const API_URL = 'http://localhost:5000';

export const registerStudent = async (credentials) => {
  const response = await axios.post(`${API_URL}/student/register`, credentials);
  return response.data;
};

export const loginStudent = async (credentials) => {
  const response = await axios.post(`${API_URL}/student/login`, credentials);
  return response.data;
};

export const fetchStudents = async () => {
  const response = await axios.get(`${API_URL}/students`);
  return response.data;
};
