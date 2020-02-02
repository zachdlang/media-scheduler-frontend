import React, { Component } from 'react';
import Loader from './Loader';
import { apiToken } from '../api/auth';

class Home extends Component {
  componentDidMount() {
    if (!apiToken) window.location = '/login';
    else window.location = '/episodes';
  }

  render() {
    return(
      <Loader />
    )
  }
}

export default Home;