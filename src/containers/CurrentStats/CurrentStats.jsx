import React, {Component} from 'react';
import StatBlock from '../../components/StatBlock/StatBlock';
import { connect } from 'react-redux';
import { addCurrentStats, addHistoricalStats } from '../../actions';
import { fetchCurrentStats, fetchHistoricalStats } from '../../util/api';
import { cleanStats, cleanHistoricalStats } from '../../util/cleaners';
import PropTypes from 'prop-types';

export class CurrentStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoading: true,
      error: ''
    }
  }

  componentDidMount() {
    this.getCurrentStats();
    setTimeout(() => this.getHistoricalStats(), 4000);
  }

  getCurrentStats = async () => {
    return await fetchCurrentStats()
      .then(data => cleanStats(data[0].lastData))
      .then(currentStats => {
        this.props.addCurrentStats(currentStats)
        this.setState({error: '', isLoading: false})
  })
      .catch(err => this.setState({ error: 'Failed to load current stats' }))
  }

  getHistoricalStats = () => {
    fetchHistoricalStats()
      .then(data => cleanHistoricalStats(data))
      .then(historicalStats => {
        this.props.addHistoricalStats(historicalStats);
        this.setState({ error: '' })
  })
      .catch(err => this.setState({ error: 'Failed to load historical stats' }))
  }

  render() {
    const { temp, humidity, pressure, dew, wind } = this.props.currentStats;

    const timestamps = this.props.historicalStats.map(i => parseInt(i.timestamp.split(':')[0].split('T')[1], 10) + ':');

    let page;

    if (this.state.isLoading) {
      page = 'loading...'
    } else if (this.state.error) {
      page = `${this.state.error}`;
    } else {
      page = (
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
    }
    return page; 
  };
}

CurrentStats.propTypes = {
  currentStats: PropTypes.object,
  historicalStats: PropTypes.array,
  addCurrentStats: PropTypes.func,
  addHistoricalStats: PropTypes.func
};

export const mapStateToProps = state => ({
  currentStats: state.currentStats,
  historicalStats: state.historicalStats
})

export const mapDispatchToProps = dispatch => ({
  addCurrentStats: currentStats => dispatch(addCurrentStats(currentStats)),
  addHistoricalStats: historicalStats => dispatch(addHistoricalStats(historicalStats))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentStats);
