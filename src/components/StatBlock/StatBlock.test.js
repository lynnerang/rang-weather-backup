import React from 'react';
import { shallow } from 'enzyme';
import { StatBlock } from './StatBlock';
import { mockCurrentStats, mockHistoricalStats, mockForecastData } from '../../util/mockData';

describe('StatBlock', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<StatBlock
      type="wind"
      title="wind"
      stats={mockCurrentStats.wind}
      data={mockHistoricalStats.map(stat => stat.wind)}
      hasChart={true}
      hasNums={true}
    />)
  })

  it('matches the snapshot when it has both a chart and stats', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when it has stats but no chart', () => {
    wrapper = shallow(<StatBlock
      type="storm"
      title="storm risk"
      stats={mockCurrentStats.storm}
      hasChart={false}
      hasNums={true}
    />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot when it has a chart but no stats', () => {
    wrapper = shallow(<StatBlock
      type="temp"
      title="temperature"
      data={mockForecastData.tempTrend}
      hasChart={true}
      hasNums={false}
    />)

    expect(wrapper).toMatchSnapshot();
  })

});
