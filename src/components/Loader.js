import React, { Component } from 'react';
import { Loader as BulmaLoader } from 'react-bulma-components';

class Loader extends Component {
  render() {
    return(
      <BulmaLoader
        className="loading-wheel"
      />
    )
  }
}

export default Loader;