import axios from 'axios';
axios.defaults.baseURL = 'https://heroku-moker-todos.herokuapp.com'

export const getNews = (path) => {
  return axios.get(path);
}

export const getSingleNews = (path) => {
  return axios.get(path);
}

export const searchNews = (path, query) => {
  return axios.get(path, {
    params:{
      q:query
    }
  });
}

export const logInProcess = (userState)=>{
  return axios.post('https://reqres.in/api/login', {
    "email":userState.email,
    "password":userState.passowrd
})
}

export const addnewNews = (userState, path)=>{
  return axios.post(`/${path}`, {
    "category":userState.category,
    "title":userState.title,
    "subtitle":userState.subtitle,
    "image":userState.image,
    "altText":userState.altText,
    "description":userState.description,
    "tweetlink":userState.tweetlink,
    "instalink":userState.instalink
})
}