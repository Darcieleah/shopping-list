import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bill from './Bill';

describe('<Bill />', () => {
  test('it should mount', () => {
    render(<Bill />);
    
    const bill = screen.getByTestId('Bill');

    expect(bill).toBeInTheDocument();
  });
});