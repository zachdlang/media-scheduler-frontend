import React, { Component } from 'react';
import { Columns, Card, Content, Heading } from 'react-bulma-components';
import placeholder from '../images/episode_placeholder.png';

function lpad(str, max) {
  str = str.toString();
  return str.length < max ? lpad("0" + str) : str;
}

class Episode extends Component {
  formatEpisode = () => {
    const { seasonnumber, episodenumber } = this.props.episode
    return `S${lpad(seasonnumber, 2)}E${lpad(episodenumber, 2)}`;
  }

  render() {
    const episode = this.props.episode;
    return (
      <Columns.Column
      tablet={{ size: 'one-third' }}
      mobile={{ size: 12 }}
      desktop={{ size: 'one-quarter' }}
      >
        <Card>
          <Card.Image
            size="16by9"
            src={episode.image}
            fallback={placeholder}
            alt={episode.name}
          />
          <Card.Content>
            <Content>
              <Heading size={6}>
                {episode.show_name}
              </Heading>
              {this.formatEpisode()} - {episode.name}
              <br />
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item
              renderAs="a"
              href="#Yes"
            >
              Watched
            </Card.Footer.Item>
          </Card.Footer>
        </Card>
      </Columns.Column>
    );
  }
}

export default Episode;