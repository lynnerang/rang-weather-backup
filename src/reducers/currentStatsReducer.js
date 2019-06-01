export const currentStatsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CURRENT_STATS':
      return action.payload.currentStats
    default:
      return state;
  }
}