import { combineReducers } from 'redux';
import { currentStatsReducer } from './currentStatsReducer';

const rootReducer = combineReducers({
  currentStats: currentStatsReducer
});

export default rootReducer;
