import { cleanStats, cleanHistoricalStats } from './cleaners';
import { mockCurrentStats, mockHistoricalStats, mockRawCurrentStats } from './mockData';

const mockRawHistoricalStats = [
  mockRawCurrentStats,
  { ...mockRawCurrentStats, date: '2019-05-31T20:32:20.000Z'}
]

describe('cleanStats', () => {
  it('should return a cleaned version of stats data', () => {

    const res = cleanStats(mockRawCurrentStats);
    expect(res).toEqual(mockCurrentStats);
  });
});

describe('cleanHistoricalStats', () => {
  it('should return a cleaned version of historical stats data', () => {

    const res = cleanHistoricalStats(mockRawHistoricalStats);
    expect(res).toEqual([mockHistoricalStats]);
  });
});