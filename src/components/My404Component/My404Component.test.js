import React from 'react';
import { shallow } from 'enzyme';
import My404Component from './My404Component';

describe('My404Component', () => {
  const wrapper = shallow(<My404Component />);

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})