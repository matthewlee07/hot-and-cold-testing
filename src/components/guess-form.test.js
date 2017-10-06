import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm /> Component', () => {
  it('Smoke test', () => {
    shallow(<GuessForm />);
  });

  it('Should fire onGuess when form is submitted', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback} />);
    const value = 10;
    wrapper.find('input[type="text"]').node.value = value;
    wrapper.simulate('submit');
    expect(callback).toHaveBeenCalledWith(value.toString());
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm />);
    const input = wrapper.find('input[type="text"]');
    console.log(input);
    input.node.value = 10;
    wrapper.simulate('submit');
    expect(input.node.value).toEqual('');
  })
})
