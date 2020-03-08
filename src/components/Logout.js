import React, { Component } from 'react';
import Loader from 'components/Loader';
import { clearApiToken } from 'api/auth';

export default class Logout extends Component {
  componentDidMount() {
    clearApiToken();
    window.location = '/';
  }

  render() {
    return(
      <Loader />
    )
  }
}