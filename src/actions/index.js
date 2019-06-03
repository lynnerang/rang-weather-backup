export const addCurrentStats = currentStats => ({
  type: 'ADD_CURRENT_STATS',
  payload: {
    currentStats
  }
})

export const addHistoricalStats = historicalStats => ({
  type: 'ADD_HISTORICAL_STATS',
  payload: {
    historicalStats
  }
})

export const addForecastData = forecastData => ({
  type: 'ADD_FORECAST_DATA',
  payload: {
    forecastData
  }
})