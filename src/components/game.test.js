import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './game';

describe('<Game /> Component', () => {
  const wrapper = shallow(<Game />);
  it('Smoke test', () => {
    shallow(<Game />);
  });
  it('State of feedback = Make your guess! on load', () => {
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
  });

  it('If guess is an invalid number', () => {
    wrapper.instance().guess('string');
    expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
  });

  it('If guess is a valid number', () => {
    wrapper.instance().guess(50);
    expect(wrapper.state('guesses')).toEqual([50]);
  });

})
