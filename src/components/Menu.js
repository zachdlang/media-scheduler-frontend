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
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </Navbar.Item>
          <Navbar.Burger onClick={this.toggleMenu}>
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu >
          <Navbar.Container>
            <Navbar.Item href="/episodes">
              Episodes
            </Navbar.Item>
            <Navbar.Item href="#">
              Second
            </Navbar.Item>
          </Navbar.Container>
          <Navbar.Container position="end">
            <Navbar.Item href="#">
              Logout
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Menu;