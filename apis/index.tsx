import axios from 'axios';

const baseURL = 'https://api.blendpad.com/';

const api = axios.create({
  baseURL,
});

export default api;
