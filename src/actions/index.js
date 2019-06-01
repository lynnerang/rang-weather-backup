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