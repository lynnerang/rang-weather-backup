import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCurrentStats, addHistoricalStats } from '../../actions';
import { mockCurrentStats, mockHistoricalStats } from '../../util/mockData';
import { fetchCurrentStats, fetchHistoricalStats } from '../../util/api';
import { cleanStats, cleanHistoricalStats } from '../../util/cleaners';
import CurrentStats from '../../components/CurrentStats/CurrentStats';
import Forecast from '../Forecast/Forecast';


export class App extends Component {
  state = {
    showNav: false
  }

  // componentDidMount() {
  //   this.getCurrentStats();
  //   this.getHistoricalStats();
  // }

  getCurrentStats = () => {
    fetchCurrentStats()
      .then(data => cleanStats(data[0].lastData))
      .then(currentStats => this.props.addCurrentStats(currentStats))
      .catch(err => console.log(err))
  }

  getHistoricalStats = () => {
    fetchHistoricalStats()
      .then(data => cleanHistoricalStats(data))
      .then(historicalStats => this.props.addHistoricalStats(historicalStats))
      .catch(err => console.log(err))
  }

  render() {
    let page; 

    // !this.props.currentStats.length || !this.props.historicalData.length ?
    //   page = 'loading...'

    //   :
      page = (
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
          <Forecast />
          <main className="App-main">
            <Switch>
              <Route exact path='/' render={() => <CurrentStats currentStats={mockCurrentStats} historicalStats={mockHistoricalStats} />} />
              <Route exact path='/forecast' render={() => <Forecast />} />
            </Switch>
          </main>
        </div>
      );
    
    return page;
  }
}

export const mapStateToProps = state => ({
  currentStats: state.currentStats,
  historicalStats: state.historicalStats
})

export const mapDispatchToProps = dispatch => ({
  addCurrentStats: currentStats => dispatch(addCurrentStats(currentStats)),
  addHistoricalStats: historicalStats => dispatch(addHistoricalStats(historicalStats))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
