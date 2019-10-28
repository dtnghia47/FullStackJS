import React, { Component }  from 'react';
import { Provider } from 'react-redux';

import { getStore } from './store';
import HomePage from './container/HomePage'

import './style/main.scss';

class App extends Component {
  render() {
    return (
      <Provider store={getStore()} >
          <HomePage />
      </Provider>
    );
  }
}

export default App