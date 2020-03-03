import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';

class Menu extends Component {
  state = {
    active: false
  };

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
            <Navbar.Item dropdown hoverable>
              <Navbar.Link>
                Shows
              </Navbar.Link>
              <Navbar.Dropdown>
                <Navbar.Item href="/episodes">
                  Episodes
                </Navbar.Item>
                <Navbar.Item href="/shows">
                  Manage
                </Navbar.Item>
              </Navbar.Dropdown>
            </Navbar.Item>
            <Navbar.Item href="/movies">
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

export default Menu;