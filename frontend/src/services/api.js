import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || 'http://127.0.0.1:8000',
  headers: {
    Accept: 'application/json',
  },
});

export default api;
