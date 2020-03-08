import Cookies from 'js-cookie'
import { post } from './request';

export const getApiToken = () => {
  return Cookies.get('token');
}

export const setApiToken = (token) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Setting API token without HTTPS required.');
    Cookies.set('token', token);
  } else {
    Cookies.set('token', token, {secure: true, sameSite: true});
  }
}

export const clearApiToken = () => {
  Cookies.remove('token');
}

export const login = async (username, password) => {
  let token = await post('/auth', {'username': username, 'password': password})
    .then((res) => res.data)
    .catch(() => {});
  return token;
}