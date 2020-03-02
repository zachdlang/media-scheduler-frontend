import Cookies from 'js-cookie'
import { post } from './request';

export const getApiToken = () => {
  return Cookies.get('token');
}

export const setApiToken = (token) => {
  // Use .remove to delete a cookie
  Cookies.set('token', token, {secure: true, sameSite: true});
}

export const login = async (username, password) => {
  let token = await post('/auth/', {'username': username, 'password': password})
    .then((res) => res.data);
  return token;
}