import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

describe('<InfoModal /> Component', () => {
  it('Smoke test', () => {
    shallow(<InfoModal />);
  })

  it('Fires the onClose callback when the close button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<InfoModal onClose={callback}/>);
    wrapper.find('a').simulate('click', {preventDefault(){}});
    expect(callback).toHaveBeenCalled();
  })
})