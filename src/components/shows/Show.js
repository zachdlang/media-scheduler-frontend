import React, { Component } from 'react';
import { Columns, Card } from 'react-bulma-components';
import Loader from 'components/Loader';
import { followShow, unfollowShow } from 'api/shows';
import "sass/show.scss";

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: props.show,
      isLoading: false
    }
  }

  follow = () => {
    this.setState({ isLoading: true });
    const { show } = this.state;
    const showid = show.id;
    followShow(showid)
      .then(() => { show.following = true; this.setState({ show: show, isLoading: false }) });
  }

  unfollow = () => {
    this.setState({ isLoading: true });
    const { show } = this.state;
    const showid = show.id;
    unfollowShow(showid)
      .then(() => { show.following = false; this.setState({ show: show, isLoading: false }); });
  }

  footerItem = () => {
    const { following } = this.state.show;
    if (this.state.isLoading) {
      return (
        <Card.Footer.Item>
          <Loader inline={true} />
        </Card.Footer.Item>
      );
    } else {
      const className = following ? 'show-subscribed' : 'show-subscribe';
      const textContent = following ? 'Subscribed' : 'Subscribe';
      const onClick = following ? this.unfollow : this.follow;

      return (
        <Card.Footer.Item
          className={className}
          onClick={onClick}
        >
          {textContent}
        </Card.Footer.Item>
      );
    }
  }

  render() {
    const { show } = this.state;
    return (
      <Columns.Column
      tablet={{ size: 'one-third' }}
      desktop={{ size: 'one-quarter' }}
      >
        <Card>
          <Card.Image
            size="3by5"
            src={show.poster}
            // fallback={placeholder}
            alt={show.name}
          />
          <Card.Footer>
            {this.footerItem()}
          </Card.Footer>
        </Card>
      </Columns.Column>
    );
  }
}

export default Show;