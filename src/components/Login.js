import React, { Component } from 'react';
import { Hero, Container, Columns, Box, Button } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
import { getApiToken, login } from '../api/auth';

class Login extends Component {
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
                  <Form.Field>
                    <Form.Label>Username</Form.Label>
                    <Form.Control>
                      <Form.Input />
                    </Form.Control>
                  </Form.Field>
                  <Button>Hello World</Button>
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