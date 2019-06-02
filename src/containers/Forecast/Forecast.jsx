import React, { Component } from 'react';
import { darkskyApi } from '../../api/utilities';
import { connect } from 'react-redux';
import { addForecastData } from '../../actions';
import { cleanForecastData } from '../../util/cleaners';

class Forecast extends Component {

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkskyApi}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`)
      .then(res => res.json())
      .then(data => cleanForecastData(data))
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        oh hi
      </section>
    );
  }
}

export const mapStateToProps = state => ({
  forecastData: state.forecastData
})

export const mapDispatchToProps = dispatch => ({
  addForecastData: data => dispatch(addForecastData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);