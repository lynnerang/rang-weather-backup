import React from 'react';
import { shallow } from 'enzyme';
import { Forecast, mapStateToProps, mapDispatchToProps } from './Forecast';
import { mockForecastData, mockCurrentStats, mockHistoricalStats } from '../../util/mockData';
import { addForecastData } from '../../actions';
import { fetchForecastData } from '../../api/fetchForecastData';

jest.mock('../../api/fetchForecastData');

describe('Forecast', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Forecast forecastData={mockForecastData} />);

    jest.spyOn(wrapper.instance(), 'getForecastData')
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have the appropriate default state', () => {
    expect(wrapper.state()).toEqual({
      isLoading: true,
      error: ''
    });
  })

  it('should call fetchForecastData on mount', () => {
    wrapper.instance().componentDidMount();

    expect(fetchForecastData).toHaveBeenCalled();
  })

  describe('mapStateToProps', () => {
    it('should return an object with forecast data', () => {
      const mockState = {
        currentStats: mockCurrentStats,
        historicalStats: mockHistoricalStats,
        forecastData: mockForecastData
      }
      const expected = {
        forecastData: mockForecastData
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with an addForecastData action when addForecastData is called', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = addForecastData(mockForecastData)

      const mappedProps = mapDispatchToProps(mockDispatch)

      mappedProps.addForecastData(mockForecastData)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })

});
