import React from 'react';
import {shallow} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav /> Component', () => {
  it('Smoke test', () => {
    shallow(<TopNav />);
  })
})