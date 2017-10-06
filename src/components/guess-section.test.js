import React from 'react';
import {shallow} from 'enzyme';
import GuessSection from './guess-section';

describe('<GuessSection /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessSection />);
  })

  it('Should return correct feedback', () => {
    const testFB = 'this is test feedback'
    const wrapper = shallow(<GuessSection feedback={testFB} />);
    const hTag =  wrapper.find('h2');
    expect(hTag.text()).toEqual(testFB);
  })

})