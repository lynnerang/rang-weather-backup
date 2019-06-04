import { cleanStats, cleanHistoricalStats, cleanForecastData } from './cleaners';
import { mockCurrentStats, mockHistoricalStats, mockRawCurrentStats, mockRawHistoricalStats, mockForecastData, mockRawForecastData } from './mockData';


describe('cleanStats', () => {
  it('should return a cleaned version of stats data', () => {

    const result = cleanStats(mockRawCurrentStats);

    expect(result).toEqual(mockCurrentStats);
  });
});

describe('cleanHistoricalStats', () => {
  it('should return a cleaned version of historical stats data', () => {

    const result = cleanHistoricalStats(mockRawHistoricalStats);

    expect(result).toEqual(mockHistoricalStats);
  });
});

describe('cleanForecastData', () => {
  it('should return a cleaned version of forecast data', () => {

    const result = cleanForecastData(mockRawForecastData);

    expect(result).toEqual(mockForecastData);
  });
});