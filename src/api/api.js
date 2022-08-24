import axios from 'axios';
// axios.defaults.baseURL = 'https://heroku-moker-todos.herokuapp.com'

export const getTopNews = () => {
  return axios.get('https://heroku-moker-todos.herokuapp.com/topnews');
}
