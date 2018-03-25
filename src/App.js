import React, { Component } from 'react';
import ISSForm from './ISSForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to 24/7 Softwares</h1>
        </header>
        <div className="App-intro">
          <ISSForm />
        </div>
      </div>
    );
  }
}

export default App;
