import React from 'react';
import StatBlock from '../../containers/StatBlock/StatBlock';

const Main = props => {

  const {
    temp,
    humidity
  } = props.currentStats;

  return (
    <main className="Main">
      <StatBlock type="temp" title="temperature" stats={temp} />
      <StatBlock type="humidity" title="humidity" stats={humidity} />
    </main>
  );
};

export default Main;