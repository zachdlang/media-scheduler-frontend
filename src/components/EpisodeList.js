import React, { Component } from 'react';
import { Columns, Container, Loader } from 'react-bulma-components'
import Episode from './Episode';
import axios from 'axios';
import { toast } from 'bulma-toast'

class EpisodeList extends Component {
  state = {
    episodes: [],
    isLoading: true
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/episode/list`)
      .then((res) => this.setState({ episodes: res.data, isLoading: false }))
      .catch((error) => {
        this.setState({ isLoading: false });
        toast({
          message: error.response.data,
          type: 'is-danger',
          animate: { in: 'fadeIn', out: 'fadeOut' }
        });
      });
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