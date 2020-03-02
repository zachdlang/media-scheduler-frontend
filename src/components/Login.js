import React, { Component } from 'react';
import { Hero, Container, Columns, Box, Button, Form, Icon } from 'react-bulma-components';
import { User, Lock } from 'react-feather';
import { getApiToken, login } from '../api/auth';
import Input from './Input';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }

  setPassword = (e) => {
    this.setState({ password: e.target.value });
  }

  submitLogin = () => {
    if (this.state.username && this.state.password) {
      console.log('got creds!');
    } else {
      console.log('no creds :(');
    }
  }

  render() {
    const { username, password } = this.state;
    return(
      <Hero size="fullheight" color="primary">
        <Hero.Body>
          <Container>
            <Columns centered={true}>
              <Columns.Column
                tablet={{ size: 'one-third' }}
              >
                <Box>
                  <Input
                    icon={User}
                    name="username"
                    placeholder="Username"
                    required={true}
                    value={username}
                    onChange={this.setUsername}
                  />
                  <Input
                    icon={Lock}
                    name="password"
                    type="password"
                    placeholder="Password"
                    required={true}
                    value={password}
                    onChange={this.setPassword}
                  />
                  <Button fullwidth={true} color="success" onClick={this.submitLogin}>Login</Button>
                </Box>
              </Columns.Column>
            </Columns>
          </Container>
        </Hero.Body>
      </Hero>
    )
  }
}

export default Login;