import axios from 'axios';
axios.defaults.baseURL = 'https://heroku-moker-todos.herokuapp.com'

export const getNews = (path) => {
  return axios.get(path);
}

export const getSingleNews = (path) => {
  return axios.get(path);
}