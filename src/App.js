import React, { Component } from 'react';
import './App.css';

import Message from './components/Message'

import emails from './data.js'

class App extends Component {
  render() {
    return (
      <div>
        <Message emails={ emails }/>
      </div>
    );
  }
}

export default App;
