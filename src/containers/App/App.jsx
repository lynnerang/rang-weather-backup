import React, { Component } from 'react';
import Main from '../../components/Main/Main';
import { connect } from 'react-redux';
import { baseUrl, apiKey, appKey, macAddress } from '../../api/utilities';
import { addCurrentStats, addHistoricalStats } from '../../actions';

export class App extends Component {
  state = {
    showNav: false
  }

  componentDidMount() {
    this.getCurrentStats();
    this.getHistoricalStats();
  }

  getCurrentStats = () => {
    fetch(`${baseUrl}?applicationKey=${appKey}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(data => this.cleanStats(data[0].lastData))
      .then(currentStats => this.props.addCurrentStats(currentStats))
      .catch(err => console.log(err))
  }

  getHistoricalStats = () => {
    fetch(`${baseUrl}/${macAddress}?applicationKey=${appKey}&apiKey=${apiKey}&endDate=&limit=100`)
      .then(res => res.json())
      .then(data => this.cleanHistoricalStats(data))
      .then(historicalStats => this.props.addHistoricalStats(historicalStats))
      .catch(err => console.log(err))
  }

  cleanStats = stats => {
    return ({
      temp: {
        stat1: stats.tempinf,
        stat2: stats.tempf,
        unit: '°F',
        label1: 'Indoor',
        label2: 'Outdoor'
      },
      humidity: {
        stat1: stats.humidityin,
        stat2: stats.humidity,
        unit: '%',
        label1: 'Indoor',
        label2: 'Outdoor'
      },
      pressure: {
        stat1: stats.baromrelin,
        unit: 'REL.lnhg'
      },
      dew: {
        stat1: stats.dewPoint,
        unit: '°F'
      },
      wind: {
        stat1: stats.windspeedmph * .447,
        stat2: stats.winddir,
        unit: 'M/SEC',
        label1: 'Speed',
        label2: 'Direction'
      }
    })
  }

  cleanHistoricalStats = timeStamps => {
    if (timeStamps.length) {
      const historicalData = timeStamps.filter(time => {
        const mins = time.date.split(':')[1].split('.')[0];
        if (mins === '00' || mins === '30') {
          return time;
        }
      });
      const records = historicalData.slice(0, 8);
      return records.map(record => this.cleanStats(record));
    }
  }

  render() {
    console.log(this.props)
    let page;

    !this.props.currentStats.length || !this.props.historicalData.length ?
      page = 'loading...'

      : page = (
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
          <Main currentStats={this.props.currentStats} historicalStats={this.props.historicalStats}/>
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
