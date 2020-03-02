import React, { Component } from 'react';
import { Hero, Container, Columns, Box, Button, Form, Icon } from 'react-bulma-components';
import { User, Lock } from 'react-feather';
import { getApiToken, login } from '../api/auth';

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
                  <Form.Field>
                    <Form.Control iconLeft>
                      <Form.Input onChange={this.setUsername} name="username" placeholder="Username" value={username} />
                      <Icon align="left">
                        <User />
                      </Icon>
                    </Form.Control>
                    <Form.Help color="danger">This field is required.</Form.Help>
                  </Form.Field>
                  <Form.Field>
                    <Form.Control iconLeft>
                      <Form.Input onChange={this.setPassword} name="password" placeholder="Password" type="password" value={password} />
                      <Icon align="left">
                        <Lock />
                      </Icon>
                    </Form.Control>
                    <Form.Help color="danger">This field is required.</Form.Help>
                  </Form.Field>
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