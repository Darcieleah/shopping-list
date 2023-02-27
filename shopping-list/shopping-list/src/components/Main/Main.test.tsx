import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Main from './Main';
import productsData from '../../product-data';

describe('<Main />', () => {
  test('it should mount', () => {
    //TODO: using real product data file for ease, ideally use test data here
    const {products} = productsData;
    const onAdd = jest.fn();

    render(<Main products={products} onAdd={onAdd}/>);
    
    const main = screen.getByTestId('Main');

    expect(main).toBeInTheDocument();
  });
});