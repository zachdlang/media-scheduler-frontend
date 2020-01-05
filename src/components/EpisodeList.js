import React, { Component } from 'react';
import { Columns, Container, Loader } from 'react-bulma-components'
import Episode from './Episode';
import axios from 'axios';

class EpisodeList extends Component {
  state = {
    episodes: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get('http://localhost:8000/episode/list')
      .then((res) => this.setState({ episodes: res.data, isLoading: false }))
      .catch((error) => console.log(error.response));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Loader
          style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 'auto' }}
        />
      );
    }

    return (
      <Container>
        <Columns>
          {
            this.state.episodes.map((episode) => (
              <Columns.Column size="one-quarter">
                <Episode key={episode.id} episode={episode} />
              </Columns.Column>
            ))
          }
        </Columns>
      </Container>
    );
  }
}

export default EpisodeList;