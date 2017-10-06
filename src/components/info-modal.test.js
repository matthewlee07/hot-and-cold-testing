import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

describe('<InfoModal /> Component', () => {
  it('Smoke test', () => {
    shallow(<InfoModal />);
  })
})