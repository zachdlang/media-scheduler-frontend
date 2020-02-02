import React, { Component } from 'react';
import { Loader as BulmaLoader } from 'react-bulma-components';

class Loader extends Component {
  render() {
    const styles = {
      width: 100,
      height: 100,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 200,
      borderColor: 'turquoise',
      borderTopColor: 'transparent',
      borderRightColor: 'transparent'
    };

    return(
      <BulmaLoader
        style={styles}
      />
    )
  }
}

export default Loader;