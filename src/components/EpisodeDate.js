import React, { Component } from 'react';
import { Section, Heading, Columns } from 'react-bulma-components';
import Episode from './Episode';

class EpisodeDate extends Component {
  state = {
    date: this.props.date,
    episodes: this.props.episodes
  };

  removeEpisode = (episodeid) => {
    let episodes = this.state.episodes.filter(episode => episode.id !== episodeid);
    // Remove whole date if no more episodes
    if (episodes.length <= 0) this.props.removeSelf(this.state.date);
    else this.setState({ episodes: episodes });  // Otherwise just remove single episode
  }

  render() {
    return (
      <Section>
        <Heading>{this.state.date}</Heading>
        <Columns>
          {
            this.state.episodes.map((episode) => (
              <Episode
                key={episode.id}
                episode={episode}
                removeSelf={this.removeEpisode}
              />
            ))
          }
        </Columns>
      </Section>
    );
  }
}

export default EpisodeDate;
