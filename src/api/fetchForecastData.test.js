import { fetchForecastData } from '../api/fetchForecastData';;
import { mockForecastData } from '../util/mockData';


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
    const expectedUrl = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/40.0114669,-105.0940768?exclude=minutely,alerts,flags`;

    await fetchForecastData();
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the response if successful', async () => {
    const result = await fetchForecastData();

    expect(result).toEqual(mockForecastData);
  });

  it('should throw an error if it fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchForecastData()).rejects.toEqual(Error('Failed to fetch forecast data.'));
  });
});
