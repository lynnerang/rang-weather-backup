import React from 'react';
import StatBlock from '../../containers/StatBlock/StatBlock';

const CurrentStats = props => {
  const {
    temp,
    humidity,
    pressure,
    dew,
    wind
  } = props.currentStats;

  return (
    <section>
      <StatBlock type="temp" title="temperature" stats={temp} data={props.historicalStats.temp} />
      <StatBlock type="humidity" title="humidity" stats={humidity} data={props.historicalStats.humidity} />
      <StatBlock type="pressure" title="pressure" stats={pressure} data={props.historicalStats.pressure} />
      <StatBlock type="dew" title="dew point" stats={dew} data={props.historicalStats.dew} />
      <StatBlock type="wind" title="wind" stats={wind} data={props.historicalStats.wind} />
    </section>
  );
};

export default CurrentStats;