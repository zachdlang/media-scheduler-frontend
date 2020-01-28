import axios from 'axios';
import { toast } from 'bulma-toast';

export const APIRequest = async (endpoint) => {
  return axios
      .get(`${process.env.REACT_APP_API_URL}${endpoint}`)
      .catch((error) => {
        let message;
        if (error.response) {
          message = error.response.data
        } else {
          message = error.toString();
        }
        toast({
          message: message,
          type: 'is-danger',
          animate: { in: 'fadeIn', out: 'fadeOut' }
        });
      });
}