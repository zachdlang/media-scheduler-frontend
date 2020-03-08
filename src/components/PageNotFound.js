import React, { Component } from 'react';
import { Hero, Container, Columns, Box } from 'react-bulma-components';

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
                  Page Not Found
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