export const mockRawCurrentStats = {
  dateutc: 1559334720000,
  winddir: 94,
  windspeedmph: 1.8,
  windgustmph: 2.2,
  maxdailygust: 10.3,
  tempf: 75.2,
  hourlyrainin: 0,
  eventrainin: 0,
  dailyrainin: 0,
  weeklyrainin: 0.98,
  monthlyrainin: 0.98,
  totalrainin: 3.88,
  baromrelin: 30.17,
  baromabsin: 24.82,
  humidity: 24,
  tempinf: 75.7,
  humidityin: 33,
  uv: 8,
  solarradiation: 829.44,
  feelsLike: 73.55,
  dewPoint: 35.92,
  date: '2019-05-31T20:32:00.000Z'
};

export const mockCurrentStats = {
	dew: {
    stat1: 35.92,
		unit: '°F'
	},
	humidity: {
    stat1: 33,
    stat2: 24,
		unit: '%',
		label1: 'Indoor',
		label2: 'Outdoor'
	},
	pressure: {
		stat1: 30.17,
		unit: 'REL.lnhg'
	},
	temp: {
		stat1: 75.7,
		stat2: 75.2,
		unit: '°F',
		label1: 'Indoor',
		label2: 'Outdoor'
	},
	wind: {
		stat1: .8,
		stat2: 94,
		unit: 'M/SEC',
		label1: 'Speed',
		label2: 'Direction'
	}
};

export const mockHistoricalStats = [
	{
		dew: {
			stat1: 47.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 36,
			stat2: 41,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 30.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 77.7,
			stat2: 72.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:02:00.000Z'
		},
		wind: {
			stat1: 1.1175,
			stat2: 3,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:04:00.000Z'
		}
	},
	{
		dew: {
			stat1: 37.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 46,
			stat2: 31,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 32.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 71.7,
			stat2: 70.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 2.1175,
			stat2: 4.2,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 47.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 36,
			stat2: 41,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 30.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 77.7,
			stat2: 72.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:03:00.000Z'
		},
		wind: {
			stat1: 1.12,
			stat2: 3,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 37.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 46,
			stat2: 31,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 32.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 71.7,
			stat2: 70.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 2.11,
			stat2: 4.2,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 47.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 36,
			stat2: 41,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 30.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 77.7,
			stat2: 72.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 1.11,
			stat2: 3,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 37.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 46,
			stat2: 31,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 32.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 71.7,
			stat2: 70.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 2.11,
			stat2: 4.2,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 47.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 36,
			stat2: 41,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 30.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 77.7,
			stat2: 72.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 1.11,
			stat2: 3,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	},
	{
		dew: {
			stat1: 37.63,
			unit: '°F',
			date: '2019-06-01T20:30:00.000Z'
		},
		humidity: {
			stat1: 46,
			stat2: 31,
			unit: '%',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		pressure: {
			stat1: 32.15,
			unit: 'REL.lnhg',
			date: '2019-06-01T20:30:00.000Z'
		},
		temp: {
			stat1: 71.7,
			stat2: 70.7,
			unit: '°F',
			label1: 'Indoor',
			label2: 'Outdoor',
			date: '2019-06-01T20:30:00.000Z'
		},
		wind: {
			stat1: 2.11,
			stat2: 4.2,
			unit: 'M/SEC',
			label1: 'Speed',
			label2: 'Direction',
			date: '2019-06-01T20:30:00.000Z'
		}
	}
];
