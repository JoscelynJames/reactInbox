import React, { Component } from 'react';
import './App.css';

import Toolbar from './components/Toolbar'
import Messages from './components/Messages'

import emails from './data.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emails: emails,
    };
    
  };
  render() {
    return (
      <div>
        <Toolbar emails={ emails }/>
        <Messages emails={ emails }/>
      </div>
    );
  };
};

export default App;
