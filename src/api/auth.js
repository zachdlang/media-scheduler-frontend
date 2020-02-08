import { post } from './request';

export const getApiToken = () => {
  return localStorage.getItem('token'); 
}

export const setApiToken = (token) => {
  localStorage.setItem('token', token);
}

export const login = async (username, password) => {
  let token = await post('/auth/', {'username': username, 'password': password})
    .then((res) => res.data);
  return token;
}