import { historicalStatsReducer } from './historicalStatsReducer';
import { mockHistoricalStats } from '../util/mockData';
import { addHistoricalStats } from '../actions';

describe('historicalStatsReducer', () => {
	it('should return the initial state', () => {
		const expected = [];

		const result = historicalStatsReducer(undefined, {});

		expect(result).toEqual(expected);
	});

	it('should return a new state of historical stats data', () => {
		const expected = mockHistoricalStats;

		const action = addHistoricalStats(mockHistoricalStats);

		const result = historicalStatsReducer(undefined, action);

		expect(result).toEqual(expected);
	});
});
