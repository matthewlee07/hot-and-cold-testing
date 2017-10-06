import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

const guesses = [1, 2, 3];

describe('<GuessList /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessList guesses={guesses}/>);
  })
})