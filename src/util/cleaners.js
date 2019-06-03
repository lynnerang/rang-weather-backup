export const cleanStats = stats => {
  return ({
      timestamps: stats.date.map(i => parseInt(i.date.split(':')[0].split('T')[1], 10)),
      temp: {
        stat1: stats.tempinf,
        stat2: stats.tempf,
        unit: '°F',
        label1: 'Indoor',
        label2: 'Outdoor'
      },
      humidity: {
        stat1: (stats.humidityin*100).toFixed(1),
        stat2: (stats.humidity*100).toFixed(1),
        unit: '%',
        label1: 'Indoor',
        label2: 'Outdoor'
      },
      pressure: {
        stat1: stats.baromrelin,
        unit: 'REL.lnhg'
      },
      dew: {
        stat1: stats.dewPoint,
        unit: '°F'
      },
      wind: {
        stat1: (stats.windspeedmph * .447).toFixed(2),
        stat2: stats.winddir,
        unit: 'M/SEC',
        label1: 'Speed',
        label2: 'Direction'
      }
    })
} 

export const cleanHistoricalStats = snapshots => {
  const hourly = snapshots.filter(instance => {
    const mins = instance.date.split(':')[1];
    if (mins === '00') {
      return instance;
    }
  });
  const last12s = hourly.slice(0, 12).reverse();

  return last12s.map(record => cleanStats(record));
}

export const cleanForecastData = data => {
  const next12HrData = data.hourly.data.slice(1, 13);
  const next12HrTimes = next12HrData.map(hour => `${new Date(hour.time * 1000).getHours()}:`);
  const sunriseTime = new Date(data.daily.data[0].sunriseTime * 1000);
  const sunsetTime = new Date(data.daily.data[0].sunsetTime * 1000);
  const moonPhase = data.daily.data[0].moonPhase;
  let moonPhaseTxt;

  if (moonPhase === 0) {
    moonPhaseTxt = 'New Moon'
  } else if (moonPhase === '.25') {
    moonPhaseTxt = 'Quarter Moon'
  } else if (moonPhase === '.5') {
    moonPhaseTxt = 'Half Moon'
  } else if (moonPhase === '1') {
    moonPhaseTxt = 'Full Moon'
  } else {
    moonPhaseTxt = ''
  }

  return ({
    summary: data.hourly.summary,
    icon: data.hourly.icon,
    timestamps: next12HrTimes,
    temp: {
      stat1: data.daily.data[0].temperatureHigh.toFixed(1),
      stat2: data.daily.data[0].temperatureLow.toFixed(1),
      unit: '°F',
      label1: 'High',
      label2: 'Low'
    },
    storm: {
      stat1: data.currently.nearestStormDistance,
      stat2: data.currently.nearestStormBearing,
      unit: 'miles',
      label1: 'Distance',
      label2: 'Direction'
    },
    sun: {
      stat1: `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`,
      label1: 'Sunrise',
      stat2: `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`,
      label2: 'Sunset'
    },
    moon: {
      stat1: Math.floor(moonPhase * 100),
      unit: '% FULL',
      label1: moonPhaseTxt
    },
    tempTrend: next12HrData.map(hour => hour.temperature.toFixed(1)),
    humidityTrend: next12HrData.map(hour => (hour.humidity*100).toFixed(1)),
    pressureTrend: next12HrData.map(hour => hour.pressure),
    dewTrend: next12HrData.map(hour => hour.dewPoint),
    windTrend: next12HrData.map(hour => hour.windSpeed)
  })
}

