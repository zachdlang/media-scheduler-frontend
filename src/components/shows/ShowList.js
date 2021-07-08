import React, { Component } from 'react';
import { Container, Box, Columns } from 'react-bulma-components';
import Loader from 'components/Loader';
import Show from 'components/shows/Show';
import { getShows } from 'api/shows';

class ShowList extends Component {
  state = {
    shows: [],
    isLoading: true
  };

  componentDidMount() {
    getShows()
      .then((shows) => this.setState({ shows: shows }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Box>
            <Loader />
          </Box>
        </Container>
      );
    }

    return (
      <Container>
        <Box>
          <Columns>
            {
              this.state.shows.map((show) => (
                <Show
                  key={show.id}
                  show={show}
                />
              ))
            }
          </Columns>
        </Box>
      </Container>
    );
  }
}

export default ShowList;