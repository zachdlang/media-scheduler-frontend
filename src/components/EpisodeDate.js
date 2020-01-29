import React, { Component } from 'react';
import { Section, Heading, Columns } from 'react-bulma-components';
import Episode from './Episode';

class EpisodeDate extends Component {
  render() {
    const date = this.props.date;
    const episodes = this.props.episodes;

    return (
      <Section>
        <Heading>{date}</Heading>
        <Columns>
          {
            episodes.map((episode) => (
              <Episode key={episode.id} episode={episode} />
            ))
          }
        </Columns>
      </Section>
    );
  }
}

export default EpisodeDate;
