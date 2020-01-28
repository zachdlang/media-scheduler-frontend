import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menu from './components/Menu';
import EpisodeDateList from './components/EpisodeDateList';
import 'react-bulma-components/dist/react-bulma-components.min.css';

require('dotenv').config()

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Route
            exact
            path='/'
            render={(props) => (
              <React.Fragment>
                <EpisodeDateList />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
