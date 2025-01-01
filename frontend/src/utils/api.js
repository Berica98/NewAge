import axios from 'axios';

// Use environment variables for API base URL
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAnnouncements = async (classId) => {
  const endpoint = classId ? `/announcement/${classId}/` : '/announcement/';
  const response = await apiClient.get(endpoint);
  return response.data;
};

export const fetchStudents = async () => {
  const response = await apiClient.get('/students');
  return response.data;
};

export default apiClient;
