import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Amplify, { API } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);
API.configure(awsconfig);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
