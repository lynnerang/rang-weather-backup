import { fetchHistoricalStats} from './fetchHistoricalStats';
import { baseUrl, apiKey, appKey, macAddress } from '../api/utilities';
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
    const expectedUrl = `${baseUrl}/${macAddress}?applicationKey=${appKey}&apiKey=${apiKey}`;

    await fetchHistoricalStats();

    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  });

  it('should return a parsed version of the result', async () => {
    const expectedData = await fetchHistoricalStats();

    expect(expectedData).toEqual(mockHistoricalStats);
  });

});