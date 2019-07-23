import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('matches snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
