import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoesapi.herokuapp.com',
});

export default api;
