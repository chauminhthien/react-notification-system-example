import React, { Component } from 'react';

import './App.css';
import { withNotification } from './NotifycationProvider';

class App extends Component {
  constructor(props: Props){
    super(props);

  }

  componentWillMount = () => {
    console.log(this.props);
    
  }

  test = () => {
    this.props.notification.s("AScasc", "SAcasccs");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={this.test} className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withNotification(App);
