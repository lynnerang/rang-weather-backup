import React, { Component } from 'react';
import Main from '../../components/Main/Main';
import { connect } from 'react-redux';
import { baseUrl, apiKey, appKey } from '../../api/utilities';
import { addCurrentStats } from '../../actions';

export class App extends Component {
  state = {
    showNav: false
  }

  componentDidMount() {
    fetch(`${baseUrl}?applicationKey=${appKey}&apiKey=${apiKey}`)
      .then(res => res.json())
      .then(currentStats => this.props.addCurrentStats(currentStats[0].lastData))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props.currentStats)
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

export const mapStateToProps = state => ({
  currentStats: state.currentStats
})

export const mapDispatchToProps = dispatch => ({
  addCurrentStats: currentStats => dispatch(addCurrentStats(currentStats))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
