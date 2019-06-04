import { forecastDataReducer } from './forecastDataReducer';
import { mockForecastData } from '../util/mockData';
import { addForecastData } from '../actions';

describe('forecastDataReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = forecastDataReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return a new state of historical stats data', () => {
    const expected = mockForecastData;

    const action = addForecastData(mockForecastData);

    const result = forecastDataReducer(undefined, action);

    expect(result).toEqual(expected);
  });
});
