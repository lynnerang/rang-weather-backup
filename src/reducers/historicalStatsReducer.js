export const historicalStatsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HISTORICAL_STATS':
      return action.payload.historicalStats
    default:
      return state;
  }
}