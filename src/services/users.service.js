import api from './api.js';

export default {
  getUsers() {
    return api.get('/users');
  },
  getUserById(id) {
    return api.get('/users/' + id);
  }
}