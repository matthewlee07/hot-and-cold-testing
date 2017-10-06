import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe('<Game /> Component', () => {
  it('Smoke test', () => {
    shallow(<Game />);
  })
})
