import React from 'react';
import StatBlock from '../../containers/StatBlock/StatBlock';

const CurrentStats = props => {
  const { temp, humidity, pressure, dew, wind } = props.currentStats;

	return (
    <section>
      <h2 className="main-title">
        Right now
      </h2>
      <StatBlock
        type="temp"
        title="temperature"
        stats={temp}
        data={props.historicalStats.map(stat => stat.temp)}
        timestamps={props.historicalStats.timestamps}
        hasChart={true}
        hasNums={true}
      />
			<StatBlock
				type="humidity"
				title="humidity"
				stats={humidity}
        data={props.historicalStats.map(stat => stat.humidity)}
        timestamps={props.historicalStats.timestamps}
        hasChart={true}
        hasNums={true}
			/>
			<StatBlock
				type="pressure"
				title="pressure"
				stats={pressure}
        data={props.historicalStats.map(stat => stat.pressure)}
        timestamps={props.historicalStats.timestamps}
        hasChart={true}
        hasNums={true}
			/>
      <StatBlock
        type="dew"
        title="dew point"
        stats={dew}
        data={props.historicalStats.map(stat => stat.dew)}
        timestamps={props.historicalStats.timestamps}
        hasChart={true}
        hasNums={true}
      />
      <StatBlock
        type="wind"
        title="wind"
        stats={wind}
        data={props.historicalStats.map(stat => stat.wind)}
        timestamps={props.historicalStats.timestamps}
        hasChart={true}
        hasNums={true}
      />
		</section>
	);
};

export default CurrentStats;
