import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { getStore } from './store';
import HomePage from './container/HomePage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import './style/main.scss';

class App extends Component {
  render() {
    return (
      <Provider store={getStore()} >
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider >
    );
  }
}

export default App