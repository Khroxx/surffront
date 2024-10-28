import axios from 'axios';

const API_URL = 'http://localhost:8000/corporation/corporations/';

export default {
  getUsers() {
    return axios.get(`http://localhost:8000/users/users-get/`);
  },
  getCorporations() {
    return axios.get(API_URL);
  },
  getCorporation(id) {
    return axios.get(`${API_URL}${id}/`);
  },
  createCorporation(data) {
    return axios.post(API_URL, data);
  },
  updateCorporation(id, data) {
    return axios.put(`${API_URL}${id}/`, data);
  },
  deleteCorporation(id) {
    return axios.delete(`${API_URL}${id}/`);
  }
};