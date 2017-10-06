import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('<Header /> Component', () => {
  it('Smoke test', () => {
    shallow(<Header />);
  })

  it('Hides info modal on start', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.state('showInfoModal')).toEqual(false);
  })

  it('Toggles info modal on toggleInfoModal', () => {
    const wrapper = shallow(<Header />);
    wrapper.instance().toggleInfoModal()
    expect(wrapper.state('showInfoModal')).toEqual(true);
    wrapper.instance().toggleInfoModal()
    expect(wrapper.state('showInfoModal')).toEqual(false);
  })



})