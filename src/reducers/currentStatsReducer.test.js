import { currentStatsReducer } from './currentStatsReducer';
import { mockCurrentStats } from '../util/mockData';
import { addCurrentStats } from '../actions'

describe('currentStatsReducer', () => {
  it('should return the initial state', () => {
    const expected = {}

    const result = currentStatsReducer(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return a new state of current stats data', () => {
    const expected = mockCurrentStats;

    const action = addCurrentStats(mockCurrentStats)

    const result = currentStatsReducer(undefined, action);

    expect(result).toEqual(expected);
  })
})
