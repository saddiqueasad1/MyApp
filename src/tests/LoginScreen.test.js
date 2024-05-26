import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

test('shows error messages for invalid inputs', () => {
  const {getByPlaceholderText, getByText} = render(<LoginScreen />);

  fireEvent.changeText(
    getByPlaceholderText('Enter your email'),
    'invalidEmail',
  );
  fireEvent.changeText(getByPlaceholderText('Enter your password'), '123');
  fireEvent.press(getByText('Login'));

  expect(getByText('Invalid email format')).toBeTruthy();
  expect(getByText('Password must be at least 8 characters')).toBeTruthy();
});

test('handles successful login', () => {
  const {getByPlaceholderText, getByText, queryByText} = render(
    <LoginScreen />,
  );

  fireEvent.changeText(
    getByPlaceholderText('Enter your email'),
    'test@example.com',
  );
  fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password');
  fireEvent.press(getByText('Login'));

  expect(queryByText('Invalid email format')).toBeNull();
  expect(queryByText('Password must be at least 8 characters')).toBeNull();
});
