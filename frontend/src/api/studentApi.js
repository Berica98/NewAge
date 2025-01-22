import axios from 'axios';

// Directly set the deployed backend URL instead of using the environment variable
const API_URL = 'https://newage-backend.vercel.app';  

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
