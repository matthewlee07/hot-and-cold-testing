import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessCount />);
  })
  it('Should return correct guess count', () => {
    const guessCt = 3;
    const wrapper = shallow(<GuessCount count={guessCt} />);
    expect(wrapper.text()).toEqual(`Guess #${guessCt}!`);
  })
})
