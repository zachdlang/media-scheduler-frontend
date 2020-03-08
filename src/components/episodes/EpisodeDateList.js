import React, { Component } from 'react';
import { Container, Box } from 'react-bulma-components';
import Loader from 'components/Loader';
import EpisodeDate from 'components/episodes/EpisodeDate';
import { getEpisodes } from 'api/episodes';

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

  removeDate = (date) => {
    // Make a deep copy
    let dates = JSON.parse(JSON.stringify(this.state.dates));
    delete dates[date];
    this.setState({ dates: dates });
  }

  componentDidMount() {
    getEpisodes()
      .then((episodes) => this.setState({ dates: groupEpisodes(episodes) }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Loader />
      );
    }

    return (
      <Container>
        <Box>
          {
            Object.keys(this.state.dates).map((key) => (
              <EpisodeDate
                key={key}
                date={key}
                episodes={this.state.dates[key]}
                removeSelf={this.removeDate}
              />
            ))
          }
        </Box>
      </Container>
    );
  }
}

export default EpisodeDateList;