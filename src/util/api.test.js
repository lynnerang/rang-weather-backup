import * as api from './api';
import { baseUrl, apiKey, appKey, macAddress, darkskyApi } from '../api/utilities';
import { mockForecastData, mockHistoricalStats, mockCurrentStats } from './mockData';

describe('fetchCurrentStats', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCurrentStats)
      })
    );
  });

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = `${baseUrl}?applicationKey=${appKey}&apiKey=${apiKey}`;

    await api.fetchCurrentStats();

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the result', async () => {
    const expectedData = await api.fetchCurrentStats();

    expect(expectedData).toEqual(mockCurrentStats);
  });

  it("should throw an error if the fetch isn't successful", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    );
    await expect(api.fetchCurrentStats()).rejects.toEqual(Error('Failed to fetch current stats data.'));
  });
});

describe('fetchHistoricalStats', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockHistoricalStats)
      })
    );
  });

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = `${baseUrl}/${macAddress}?applicationKey=${appKey}&apiKey=${apiKey}`;

    await api.fetchHistoricalStats();

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the result', async () => {
    const expectedData = await api.fetchCurrentStats();

    expect(expectedData).toEqual(mockHistoricalStats);
  });

  it("should throw an error if the fetch isn't successful", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    );
    await expect(api.fetchHistoricalStats()).rejects.toEqual(Error('Failed to fetch historical stats data.'));
  });
});

describe('fetchForecastData', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => {
          return Promise.resolve(mockForecastData);
        }
      });
    });
  });

  it('should call fetch with the correct paramters', async () => {
    const expectedUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkskyApi}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`;

    await api.fetchForecastData();
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the response if successful', async () => {
    const result = await api.fetchForecastData();

    expect(result).toEqual(mockForecastData);
  });

  it('should throw an error if it fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(api.fetchForecastData()).rejects.toEqual(Error('Failed to fetch forecast data.'));
  });
});
