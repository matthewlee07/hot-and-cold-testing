import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessCount />);
  })
})