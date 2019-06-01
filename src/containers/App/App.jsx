import React, { Component } from 'react';
import Main from '../../components/Main/Main';

export class App extends Component {
  state = {
    showNav: false
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-header-left">
            <img className="App-logo" src={require('../../images/rangweatherlogo.png')} />
            <h1>RangWeather</h1>
          </div>
          <div className="App-header-right">
            <i className="fas fa-bars"/>
          </div>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
