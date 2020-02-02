import React, { Component } from 'react';
import { Loader as BulmaLoader } from 'react-bulma-components';

class Loader extends Component {
  render() {
    return(
      <BulmaLoader
        style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 'auto' }}
      />
    )
  }
}

export default Loader;