import React, { Component } from 'react';
import { Hero, Container, Columns, Box, Button } from 'react-bulma-components';
import { User, Lock } from 'react-feather';
import { getApiToken, setApiToken, login } from 'api/auth';
import Input from 'components/Input';

class Login extends Component {
  constructor() {
    super();
    this.inputs = [];
  }

  componentDidMount() {
    if (getApiToken()) window.location = '/episodes';
  }

  submitLogin = async (event) => {
    event.preventDefault();
    let allValid = true;
    let data = {};
    this.inputs.forEach((input) => {
      let valid = input.validate();
      if (allValid && !valid) allValid = valid;
      data[input.getName()] = input.getValue();
    });
    if (allValid) {
      const { username, password } = { ...data };
      let token = await login(username, password);
      if (token) {
        setApiToken(token);
        window.location = '/episodes';
      }
    }
  }

  render() {
    return(
      <Hero size="fullheight" color="primary">
        <Hero.Body>
          <Container>
            <Columns centered={true}>
              <Columns.Column
                tablet={{ size: 'one-third' }}
              >
                <Box>
                  <form onSubmit={this.submitLogin}>
                    <Input
                      ref={instance => { this.inputs.push(instance); }}
                      icon={User}
                      name="username"
                      placeholder="Username"
                      required={true}
                      />
                    <Input
                      ref={instance => { this.inputs.push(instance); }}
                      icon={Lock}
                      name="password"
                      type="password"
                      placeholder="Password"
                      required={true}
                    />
                    <Button fullwidth={true} submit={true} color="success">Login</Button>
                  </form>
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