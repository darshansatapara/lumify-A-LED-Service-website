
const axios = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', 
});

module.exports = axiosInstance;