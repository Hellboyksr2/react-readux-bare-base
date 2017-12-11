/**
 * Core Libraries
 */
import React, { Component } from 'react';

/**
 * Import Components
 */
import Test from './test/test'

/**
 * CSS
 */
import '../../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Base React App!!!!</h1>
        <Test/>
      </div>
    );
  }
}

export default App;
