import React, {Component} from 'react';
import StatBlock from '../../containers/StatBlock/StatBlock';
import { connect } from 'react-redux';
import { addCurrentStats, addHistoricalStats } from '../../actions';
import { fetchCurrentStats, fetchHistoricalStats } from '../../util/api';
import { cleanStats, cleanHistoricalStats } from '../../util/cleaners';

export class CurrentStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }
  }

  componentDidMount() {
    this.getCurrentStats();
    setTimeout(() => this.getHistoricalStats(), 4000);
  }

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
    const { temp, humidity, pressure, dew, wind } = this.props.currentStats;
    const timestamps = this.props.historicalStats.map(i => parseInt(i.timestamp.split(':')[0].split('T')[1], 10) + ':');
    
    return (
      <section>
        <h2 className="main-title">
          Right now
        </h2>
        <StatBlock
          type="temp"
          title="temperature"
          stats={temp}
          data={this.props.historicalStats.map(stat => stat.temp)}
          timestamps={timestamps}
          hasChart={true}
          hasNums={true}
          />
        <StatBlock
          type="humidity"
          title="humidity"
          stats={humidity}
          data={this.props.historicalStats.map(stat => stat.humidity)}
          timestamps={timestamps}
          hasChart={true}
          hasNums={true}
          />
        <StatBlock
          type="pressure"
          title="pressure"
          stats={pressure}
          data={this.props.historicalStats.map(stat => stat.pressure)}
          timestamps={timestamps}
          hasChart={true}
          hasNums={true}
          />
        <StatBlock
          type="dew"
          title="dew point"
          stats={dew}
          data={this.props.historicalStats.map(stat => stat.dew)}
          timestamps={timestamps}
          hasChart={true}
          hasNums={true}
          />
        <StatBlock
          type="wind"
          title="wind"
          stats={wind}
          data={this.props.historicalStats.map(stat => stat.wind)}
          timestamps={timestamps}
          hasChart={true}
          hasNums={true}
          />
      </section>
    );
  };
}

export const mapStateToProps = state => ({
  currentStats: state.currentStats,
  historicalStats: state.historicalStats
})

export const mapDispatchToProps = dispatch => ({
  addCurrentStats: currentStats => dispatch(addCurrentStats(currentStats)),
  addHistoricalStats: historicalStats => dispatch(addHistoricalStats(historicalStats))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStats);
