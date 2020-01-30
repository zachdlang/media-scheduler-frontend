import axios from 'axios';
import { toast } from 'bulma-toast';

const _request = async (endpoint, method, data) => {
  return axios
      .request(
        {
          url: endpoint,
          method: method || 'get',
          baseURL: process.env.REACT_APP_API_URL,
          headers: {
            'Authorization': 'AUTH TOKEN',
            'Content-Type': 'application/json'
          },
          data: data
        }
      )
      .catch((error) => {
        if (error.response.status === 401) {
          window.location = '/login';
        } else {
          toast({
            message: error.response.data,
            type: 'is-danger',
            animate: { in: 'fadeIn', out: 'fadeOut' }
          });
        }
      });
}

export const get = async (endpoint) => _request(endpoint);
export const post = async (endpoint, data) => _request(endpoint, 'post', data);
export const put = async (endpoint, data) => _request(endpoint, 'put', data);