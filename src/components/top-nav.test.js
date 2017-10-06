import React from 'react';
import {shallow} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav /> Component', () => {
  it('Smoke test', () => {
    shallow(<TopNav />);
  })

  it('Fires the onWhat callback when the what button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onInfo={callback}/>);
    wrapper.find('.what').simulate('click', {preventDefault(){}});
    expect(callback).toHaveBeenCalled();
  })

  it('Fires the onNewGame callback when the newGame button is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onNewGame={callback}/>);
    wrapper.find('.new').simulate('click', {preventDefault(){}});
    expect(callback).toHaveBeenCalled();
  })
})