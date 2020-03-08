import React, { Component } from 'react';
import { Container, Columns, Box } from 'react-bulma-components';

class Login extends Component {
  render() {
    return(
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
    )
  }
}

export default Login;