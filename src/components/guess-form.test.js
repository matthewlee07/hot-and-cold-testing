import React from 'react';
import {shallow} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessForm />);
  })
})
