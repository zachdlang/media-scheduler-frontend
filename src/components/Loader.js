import React, { Component } from 'react';
import { Loader as BulmaLoader } from 'react-bulma-components';
import "sass/loader.scss";

class Loader extends Component {
  classes = () => {
    let inline = this.props.inline || false;
    if (inline) return 'loading-wheel loading-wheel-inline';
    else return 'loading-wheel';
  }

  render() {
    return(
      <BulmaLoader
        className={this.classes()}
      />
    )
  }
}

export default Loader;