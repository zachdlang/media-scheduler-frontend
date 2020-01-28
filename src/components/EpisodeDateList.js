import React, { Component } from 'react';
import { Container, Loader } from 'react-bulma-components';
import EpisodeDate from './EpisodeDate';
import { APIRequest } from '../api/Request';

const groupEpisodes = (episodes) => {
  let dates = episodes.reduce((r, a) => {
    r[a.airdate_str] = r[a.airdate_str] || [];
    r[a.airdate_str].push(a);
    return r;
  }, Object.create(null));
  return dates;
}

class EpisodeDateList extends Component {
  state = {
    dates: [],
    isLoading: true
  };

  componentDidMount() {
    APIRequest('/episode/list')
      .then((res) => this.setState({ dates: groupEpisodes(res.data) }))
      .finally(() => this.setState({ isLoading: false }));
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
        {
          Object.keys(this.state.dates).map((key) => (
            <EpisodeDate key={key} date={key} episodes={this.state.dates[key]} />
          ))
        }
      </Container>
    );
  }
}

export default EpisodeDateList;