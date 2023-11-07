import React from 'react';
import { shallow } from 'enzyme';
import { CurrentStats, mapStateToProps, mapDispatchToProps } from './CurrentStats';
import { mockCurrentStats, mockHistoricalStats, mockForecastData } from '../../util/mockData';
import { addHistoricalStats, addCurrentStats } from '../../actions';
import { fetchCurrentStats } from '../../api/fetchCurrentStats';

jest.mock('../../api/fetchCurrentStats', () => ({
  fetchCurrentStats: jest.fn(() => Promise.resolve([{ lastData: mockCurrentStats }]))
}));

describe('CurrentStats', () => {
  let wrapper;
  let mockAddCurrentStats;
  let mockAddHistoricalStats;

  beforeEach(() => {
    mockAddCurrentStats = jest.fn();
    mockAddHistoricalStats = jest.fn();

    wrapper = shallow(<CurrentStats
      currentStats={mockCurrentStats}
      historicalStats={mockHistoricalStats}
      addCurrentStats={mockAddCurrentStats}
      addHistoricalStats={mockAddHistoricalStats}
    />);
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('calls getCurrentStats on mount', async () => {
    // Clear mock
    fetchCurrentStats.mockClear();
    
    // You need to re-render the component because componentDidMount should be called again
    wrapper = shallow(<CurrentStats
      currentStats={mockCurrentStats}
      historicalStats={mockHistoricalStats}
      addCurrentStats={mockAddCurrentStats}
      addHistoricalStats={mockAddHistoricalStats}
    />);

    // Since componentDidMount is lifecycle method, it's automatically called on mount, 
    // and because getCurrentStats is async, we need to wait for it to finish
    await wrapper.instance().componentDidMount();

    expect(fetchCurrentStats).toHaveBeenCalled();
  })

  it('should have the appropriate default state', () => {
    expect(wrapper.state()).toEqual({
      data: {},
      isLoading: true,
      error: ''
    })
  })

  it('should call fetchCurrentStats when getCurrentStats is called', async () => {
    // Clear mock
    fetchCurrentStats.mockClear();

    // Call the method on the instance of the component
    await wrapper.instance().getCurrentStats();

    // Verify the mock was called
    expect(fetchCurrentStats).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should return an object with current and historical stats', () => {
      const mockState = {
        currentStats: mockCurrentStats,
        historicalStats: mockHistoricalStats,
        forecastData: mockForecastData
      }
      const expected = {
        currentStats: mockCurrentStats,
        historicalStats: mockHistoricalStats
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addCurrentStats action when addCurrentStats is called', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = addCurrentStats(mockCurrentStats);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addCurrentStats(mockCurrentStats)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

  it('calls dispatch with an addHistoricalStats action when addHistoricalStats is called', () => {

    const mockDispatch = jest.fn()
    const actionToDispatch = addHistoricalStats(mockHistoricalStats)

    const mappedProps = mapDispatchToProps(mockDispatch)

    mappedProps.addHistoricalStats(mockHistoricalStats)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

});
