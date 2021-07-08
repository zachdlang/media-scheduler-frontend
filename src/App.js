import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Hero } from 'react-bulma-components';
import HeaderMenu from 'components/HeaderMenu';
import FooterMenu from 'components/FooterMenu';
import Home from 'components/Home';
import Login from 'components/Login';
import Logout from 'components/Logout';
import PageNotFound from 'components/PageNotFound';
import EpisodeDateList from 'components/episodes/EpisodeDateList';
import ShowList from 'components/shows/ShowList';
import 'react-bulma-components/dist/react-bulma-components.min.css';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Hero size="fullheight" color="primary">
        <Router>
          <div className="App">
            <Hero.Head renderAs="header">
              <HeaderMenu />
            </Hero.Head>
            <Hero.Body>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={Home}
                />
                <Route
                  path='/login'
                  component={Login}
                />
                <Route
                  path='/logout'
                  component={Logout}
                />
                <Route
                  path='/episodes'
                  component={EpisodeDateList}
                />
                <Route
                  path='/shows'
                  component={ShowList}
                />
                <Route component={PageNotFound} />
              </Switch>
            </Hero.Body>
            <Hero.Footer renderAs="footer">
              <FooterMenu />
            </Hero.Footer>
          </div>
        </Router>
      </Hero>
    );
  }
}

export default App;
