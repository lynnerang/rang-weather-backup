import * as action from './index'
import { mockCurrentStats, mockHistoricalStats, mockForecastData } from '../util/mockData';

describe('Action Creators', () => {
  it('should return an ADD_CURRENT_STATS action', () => {
    const expected = {
      type: 'ADD_CURRENT_STATS',
      payload: {
        currentStats: mockCurrentStats
      }
    };
    const result = action.addCurrentStats(mockCurrentStats);

    expect(result).toEqual(expected);
  });

  it('should return an ADD_HISTORICAL_STATS action', () => {
    const expected = {
      type: 'ADD_HISTORICAL_STATS',
      payload: {
        historicalStats: mockHistoricalStats
      }
    };
    const result = action.addHistoricalStats(mockHistoricalStats);
    expect(result).toEqual(expected);
  });

  it('should return an ADD_FORECAST_DATA action', () => {
    const expected = {
      type: 'ADD_FORECAST_DATA',
      payload: {
        forecastData: mockForecastData
      }
    };

    const result = action.addForecastData(mockForecastData);

    expect(result).toEqual(expected);
  });
});