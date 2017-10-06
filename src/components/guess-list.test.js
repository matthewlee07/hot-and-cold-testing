import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessList from './guess-list';

const guesses = [1, 2, 3];

describe('<GuessList /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessList guesses={guesses}/>);
  });

  it('Should render an array of guesses', () => {
    const array = [1,2,3];
    const wrapper = shallow(<GuessList guesses={array}/>);
    expect(wrapper.find('li').length).toEqual(3);
  });
})