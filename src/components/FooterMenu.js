import React, { Component } from 'react';
import { Container, Content } from 'react-bulma-components';
import "sass/footer.scss";

class FooterMenu extends Component {
  render() {
    return (
      <Container style={{ textAlign: 'center', padding: '3rem', width: '100%' }}>
        <Content>
          <p>
            <a href="https://github.com/zendamacf/" target="_blank" rel="noopener noreferrer">
              <img className="github-logo" src="/github-white.png" alt="GitHub Logo" />
            </a>
          </p>
        </Content>
      </Container>
    );
  }
}

export default FooterMenu;