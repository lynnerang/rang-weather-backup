import { mockCurrentStats } from '../util/mockData';
import { fetchCurrentStats } from '../api/fetchCurrentStats';

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
    const expectedUrl = `https://api.ambientweather.net/v1/devices?applicationKey=${process.env.REACT_APP_ANBI_APP_KEY}&apiKey=${process.env.REACT_APP_ANBI_API_KEY}`;

    await fetchCurrentStats();

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the result', async () => {
    const expectedData = await fetchCurrentStats();

    expect(expectedData).toEqual(mockCurrentStats);
  });

  it("should throw an error if the fetch isn't successful", async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: false
      })
    );
    await expect(fetchCurrentStats()).rejects.toEqual(Error('Failed to fetch current stats data.'));
  });
});
