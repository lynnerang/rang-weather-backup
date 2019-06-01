import React from 'react';
import StatBlock from '../../containers/StatBlock/StatBlock';

const Main = props => {

  const {
    temp,
    humidity,
    pressure,
    dew,
    wind
  } = props.currentStats;

  return (
    <main className="Main">
      <StatBlock type="temp" title="temperature" stats={temp} />
      <StatBlock type="humidity" title="humidity" stats={humidity} />
      <StatBlock type="pressure" title="pressure" stats={pressure} />
      <StatBlock type="dew" title="dew point" stats={dew} />
      <StatBlock type="wind" title="wind" stats={wind} />
    </main>
  );
};

export default Main;