import axios from 'axios';
import { getToken } from '../utils/tokenManager';

const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL → ", API_URL);

export const loginUser = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const registerUser = (userData) => axios.post(`${API_URL}/register`, userData);
export const fetchUserProfile = (token = null) => axios.get(`${API_URL}/me`, {
  headers: { Authorization: `Bearer ${token || getToken()}` },
});
export const getGoogleAuthUrl = () => `${API_URL}/google`;
export const setPassword = (password) => {
  return axios.post(`${API_URL}/set-password`, { password }, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
