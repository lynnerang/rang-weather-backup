export const cleanStats = stats => {
    return ({
      temp: {
        stat1: stats.tempinf,
        stat2: stats.tempf,
        unit: '°F',
        label1: 'Indoor',
        label2: 'Outdoor',
        date: stats.date
      },
      humidity: {
        stat1: stats.humidityin,
        stat2: stats.humidity,
        unit: '%',
        label1: 'Indoor',
        label2: 'Outdoor',
        date: stats.date
      },
      pressure: {
        stat1: stats.baromrelin,
        unit: 'REL.lnhg',
        date: stats.date
      },
      dew: {
        stat1: stats.dewPoint,
        unit: '°F',
        date: stats.date
      },
      wind: {
        stat1: (stats.windspeedmph * .447).toFixed(2),
        stat2: stats.winddir,
        unit: 'M/SEC',
        label1: 'Speed',
        label2: 'Direction',
        date: stats.date
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
  const lastTwelveHours = hourly.slice(0, 12).reverse();

  return lastTwelveHours.map(record => cleanStats(record));
}

export const cleanForecastData = data => {
  const nextTwelveHours = data.hourly.data.slice(1, 13);
  const nextTwelveHourTimes = nextTwelveHours.map(hour => `${new Date(hour.time * 1000).getHours()}:`);
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
    timestamps: nextTwelveHourTimes,
    highTemp: {
      num: data.daily.data[0].temperatureHigh,
      unit: '°F',
      label: 'High'
    },
    lowTemp: {
      num: data.daily.data[0].temperatureLow,
      unit: '°F',
      label: 'Low'
    },
    stormDis: {
      num: data.currently.nearestStormDistance,
      unit: 'miles',
      label: 'Distance'
    },
    stormDir: {
      num: data.currently.nearestStormBearing,
      unit: 'degrees',
      label: 'Direction'
    },
    sunrise: {
      time: `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`,
      label: 'Sunrise'
    },
    sunset: {
      time: `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`,
      label: 'Sunset'
    },
    moon: {
      num: Math.floor(moonPhase * 100),
      unit: '%',
      label: moonPhaseTxt
    },
    tempTrend: nextTwelveHours.map(hour => hour.temperature),
    humidityTrend: nextTwelveHours.map(hour => hour.humidity),
    pressureTrend: nextTwelveHours.map(hour => hour.pressure),
    dewTrend: nextTwelveHours.map(hour => hour.dewPoint),
    windSpeedTrend: nextTwelveHours.map(hour => hour.windSpeed)
  })
}

