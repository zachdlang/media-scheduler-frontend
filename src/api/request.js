import axios from 'axios';
import { toast } from 'bulma-toast';
import { getApiToken } from './auth';

const LOGINURL = '/login';

const _request = async (endpoint, method, data) => {
  return axios
      .request(
        {
          url: endpoint,
          method: method || 'get',
          baseURL: process.env.REACT_APP_API_URL,
          headers: {
            'Authorization': getApiToken(),
            'Content-Type': 'application/json'
          },
          data: data
        }
      )
      .catch((error) => {
        if (error.response.status === 401 && window.location.pathname !== LOGINURL) {
          window.location = LOGINURL;
        } else {
          toast({
            message: error.response.data,
            type: 'is-danger',
            position: 'bottom-center',
            animate: { in: 'fadeInUp', out: 'fadeOutDown' }
          });
          return Promise.reject(error.response.data);
        }
      });
}

export const get = async (endpoint) => _request(endpoint);
export const post = async (endpoint, data) => _request(endpoint, 'post', data);
export const put = async (endpoint, data) => _request(endpoint, 'put', data);