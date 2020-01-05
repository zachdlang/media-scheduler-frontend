import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    window.location = '/login';
  } else {
    return Promise.reject(error);
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
