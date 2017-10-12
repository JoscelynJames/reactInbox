import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import Message from './components/Message'

import emails from './data.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <Toolbar emails={ emails }/>
        <Message emails={ emails }/>
      </div>
    );
  }
}

export default App;
