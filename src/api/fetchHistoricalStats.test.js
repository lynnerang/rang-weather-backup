import { fetchHistoricalStats} from './fetchHistoricalStats';
import { mockHistoricalStats } from '../util/mockData';

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
    const expectedUrl = `https://api.ambientweather.net/v1/devices/${process.env.MAC_ADDRESS}?applicationKey=${process.env.ANBI_APP_KEY}&apiKey=${process.env.ANBI_API_KEY}`;

    await fetchHistoricalStats();

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the result', async () => {
    const expectedData = await fetchHistoricalStats();

    expect(expectedData).toEqual(mockHistoricalStats);
  });

});