import { combineReducers } from 'redux';
import { currentStatsReducer } from './currentStatsReducer';
import { historicalStatsReducer } from './historicalStatsReducer';

const rootReducer = combineReducers({
  currentStats: currentStatsReducer,
  historicalStats: historicalStatsReducer
});

export default rootReducer;
