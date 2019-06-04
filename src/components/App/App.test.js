import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
  let wrapper;
  let mockEvent;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot when not showing navigation', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have the appropriate default state', () => {
    expect(wrapper.state()).toEqual({
      showNav: false
    })
  })

  it('should update the state when the nav button is clicked', () => {
    wrapper.find('.fa-bars').simulate('click');
    expect(wrapper.state()).toEqual({
      showNav: true
    })
  })

  it('matches the snapshot when showNav is set to true', () => {
    wrapper.find('.fa-bars').simulate('click');
    expect(wrapper.state()).toEqual({
      showNav: true
    })
    
    expect(wrapper).toMatchSnapshot();
  })
  
});
