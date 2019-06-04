import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import CurrentStats from '../../components/CurrentStats/CurrentStats';
import Forecast from '../Forecast/Forecast';


export class App extends Component {
  state = {
    showNav: false
  }

  render() {
    let page; 

    // !this.props.currentStats.length || !this.props.historicalData.length ?
    //   page = 'loading...'

    //   :

    const nav = this.state.showNav ? (
      <nav className="App-nav">
        <NavLink className="nav-link" to="/" onClick={() => this.setState({showNav: false})}>Home</NavLink>
        <hr/>
        <NavLink className="nav-link" to="/forecast" onClick={() => this.setState({showNav: false})}>Forecast</NavLink>
      </nav>
    ): null;
      
      page = (
        <div className="App">
          {nav}
          <header className="App-header">
            <div className="App-header-left">
              <img className="App-logo" src={require('../../images/rangweatherlogo.png')} alt="App logo" />
              <h1>RangWeather</h1>
            </div>
            <div className="App-header-right">
              <i className="fas fa-bars" onClick={() => this.setState({showNav: !this.state.showNav})}/>
            </div>
          </header>
          <main className="App-main">
            <Switch>
              <Route exact path='/' render={() => <CurrentStats />} />
              <Route exact path='/forecast' render={() => <Forecast />} />
            </Switch>
          </main>
        </div>
      );
    
    return page;
  }
}

export default App;
