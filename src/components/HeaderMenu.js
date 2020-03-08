import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';

class HeaderMenu extends Component {
  state = {
    active: false
  }

  isPage = (key) => {
    let path;
    switch(key) {
      case 'episodes':
        path = '/episodes';
        break;
      case 'shows':
        path = '/shows';
        break;
      case 'movies':
        path = '/movies';
        break;
      default:
        path = null;
    }
    return window.location.pathname === path;
  }

  toggleMenu = () => {
    this.setState({ active: !this.state.active });
  }

  render() {
    return (
      <Navbar active={this.state.active}>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="#">
            <img src="/logo.png" alt="Media Scheduler" />
          </Navbar.Item>
          <Navbar.Burger onClick={this.toggleMenu}>
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item href="/episodes" active={this.isPage('episodes')}>
              Episodes
            </Navbar.Item>
            <Navbar.Item href="/shows" active={this.isPage('shows')}>
              Shows
            </Navbar.Item>
            <Navbar.Item href="/movies" active={this.isPage('movies')}>
              Movies
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="/logout">
              Logout
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default HeaderMenu;