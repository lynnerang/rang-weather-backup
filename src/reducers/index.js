import { combineReducers } from 'redux';
import { currentStatsReducer } from './currentStatsReducer';
import { historicalStatsReducer } from './historicalStatsReducer';
import { forecastDataReducer } from './forecastDataReducer';

const rootReducer = combineReducers({
  currentStats: currentStatsReducer,
  historicalStats: historicalStatsReducer,
  forecastData: forecastDataReducer
});

export default rootReducer;
