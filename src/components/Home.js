import React, { Component } from 'react';
import Loader from 'components/Loader';
import { getApiToken } from 'api/auth';

export default class Home extends Component {
  componentDidMount() {
    if (!getApiToken()) window.location = '/login';
    else window.location = '/episodes';
  }

  render() {
    return(
      <Loader />
    )
  }
}