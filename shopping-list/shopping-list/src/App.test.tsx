import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//TODO: test to check on add functionality, would not be checking items adding to the bill in the UI though
// as this would cross components and be covered in an e2e test

describe('<App />', () => {
  test('it should mount', () => {
    render(<App />);
    
    const app = screen.getByTestId('App');

    expect(app).toBeInTheDocument();
  });
});
