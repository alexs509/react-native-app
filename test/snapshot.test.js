import React from 'react';
import Profile from '../components/Profile';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Profile>Datas</Profile>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});