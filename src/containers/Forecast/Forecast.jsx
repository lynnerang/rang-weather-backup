import React, { Component } from 'react';
import { darkskyApi } from '../../api/utilities';
import { connect } from 'react-redux';
import { addForecastData } from '../../actions';
import { cleanForecastData } from '../../util/cleaners';
import StatBlock from '../../containers/StatBlock/StatBlock';

class Forecast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkskyApi}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`)
      .then(res => res.json())
      .then(data => cleanForecastData(data))
      .then(forecastData => this.props.addForecastData(forecastData))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.props.forecastData.timestamps)
    return (
      <section>
        <StatBlock
          type="sun"
          title="sun cycle"
          stats={this.props.forecastData.sun}
          timestamps={this.props.forecastData.timestamps}
          hasChart={false}
          hasNums={true}
        />
        <StatBlock
          type="moon"
          title="moon phase"
          stats={this.props.forecastData.moon}
          timestamps={this.props.forecastData.timestamps}
          hasChart={false}
          hasNums={true}
        />
        <StatBlock
          type="temphilo"
          title="high/low temp"
          stats={this.props.forecastData.temp}
          timestamps={this.props.forecastData.timestamps}
          hasChart={false}
          hasNums={true}
        />
        <StatBlock
          type="storm"
          title="storm risk"
          stats={this.props.forecastData.storm}
          timestamps={this.props.forecastData.timestamps}
          hasChart={false}
          hasNums={true}
        />
        <StatBlock
          type="temp"
          title="temperature (°F)"
          data={this.props.forecastData.tempTrend}
          timestamps={this.props.forecastData.timestamps}
          hasChart={true}
          hasNums={false}
        />
        <StatBlock
          type="humidity"
          title="humidity (%)"
          data={this.props.forecastData.humidityTrend}
          timestamps={this.props.forecastData.timestamps}
          hasChart={true}
          hasNums={false}
        />
        <StatBlock
          type="pressure"
          title="pressure (lnhg)"
          data={this.props.forecastData.pressureTrend}
          timestamps={this.props.forecastData.timestamps}
          hasChart={true}
          hasNums={false}
        />
        <StatBlock
          type="dew"
          title="dew point (°F)"
          data={this.props.forecastData.dewTrend}
          timestamps={this.props.forecastData.timestamps}
          hasChart={true}
          hasNums={false}
        />
        <StatBlock
          type="wind"
          title="wind (M/SEC)"
          data={this.props.forecastData.windTrend}
          timestamps={this.props.forecastData.timestamps}
          hasChart={true}
          hasNums={false}
        />
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