import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('<Header /> Component', () => {
  it('Smoke test', () => {
    shallow(<Header />);
  })
})