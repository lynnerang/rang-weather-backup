import React, {Component} from 'react';
import StatBlock from '../../components/StatBlock/StatBlock';
import { connect } from 'react-redux';
import { addCurrentStats, addHistoricalStats } from '../../actions';
import { fetchCurrentStats } from '../../api/fetchCurrentStats';
import { fetchHistoricalStats } from '../../api/fetchHistoricalStats';
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
    try {
      const data = await fetchCurrentStats();
      if (!data || data.length === 0) {
        throw new Error('No current stats data returned');
      }
      const cleanedData = cleanStats(data[0].lastData);
      this.props.addCurrentStats(cleanedData);
      this.setState({ error: '', isLoading: false });
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
      this.setState({ error: 'Failed to load current stats', isLoading: false });
    }
  }

  getHistoricalStats = async () => {
    try {
      const data = await fetchHistoricalStats();
      if (!data) {
        throw new Error('No historical stats data returned');
      }
      const cleanedData = cleanHistoricalStats(data);
      this.props.addHistoricalStats(cleanedData);
      this.setState({ error: '' });
    } catch (err) {
      console.error(err); // Log the error for debugging purposes
      this.setState({ error: 'Failed to load historical stats' });
    }
  }

  render() {
    const { temp, humidity, pressure, dew, wind } = this.props.currentStats;

    const timestamps = this.props.historicalStats.map(i => parseInt(i.timestamp.split(':')[0].split('T')[1], 10) - 6 + ':');

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
