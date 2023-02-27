import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bill from './Bill';
import BilledItem from '../../items/BilledItem';


var bread: BilledItem = {id: 1, name: "Bread", price: 1.1, quantity: 1};
var cheese: BilledItem = {id: 3, name: "Cheese", price: 0.9, quantity: 1};
var soup: BilledItem = {id: 4, name: "Soup", price: 0.6, quantity: 1};
var butter: BilledItem = {id: 5, name: "Butter", price: 1.2, quantity: 1};


describe('<Bill />', () => {
  const onClear = jest.fn();

  test('it should mount', () => {
    render(<Bill billItems={[]} onClear={onClear}/>);
    
    const bill = screen.getByTestId('Bill');

    expect(bill).toBeInTheDocument();
  });

  //TODO: Other unit tests not surrounding bill scenarios, e.g test on clear function
  // OFFER SCENARIO TESTS

  //Buy a soup and two breads - only one bread should be reduced
  test('only one bread should be reduced when soup and two breads added to bill', () => {
    // Arrange
    // created billed items array with two breads and one soup
    bread.quantity = 2;
    const billedItems = [bread, soup];
  
    // Act
    // render Bill component
    render(<Bill billItems={billedItems} onClear={onClear}/>);
    // click calculate bill
    const calculateBillButton = screen.getByText('Calculate my bill');
    fireEvent.click(calculateBillButton);

    // Assert
    // check correct offer is displaying
    // check before and after prices are displaying and correct
    expect(screen.getByText('Half price bread with soup')).toBeInTheDocument();
    expect(screen.getByText('Total Before savings: £2.80')).toBeInTheDocument();
    expect(screen.getByText('Total After savings: £2.25')).toBeInTheDocument();
  });

  // Buy three cheeses - only one should be free
  test('only one cheese should be free when three cheeses added to bill', () => {
    // Arrange
    cheese.quantity = 3;
    const billedItems = [cheese];
    // Act
    render(<Bill billItems={billedItems} onClear={onClear}/>);
    const calculateBillButton = screen.getByText('Calculate my bill');
    fireEvent.click(calculateBillButton);
    // Assert
    expect(screen.getByText('BOGOF on cheese')).toBeInTheDocument();
    expect(screen.getByText('Total Before savings: £2.70')).toBeInTheDocument();
    expect(screen.getByText('Total After savings: £1.80')).toBeInTheDocument();
  });

  // Buy four cheeses - two now should be free
  test('two cheeses should be free when four cheeses added to bill', () => {
    // Arrange
    cheese.quantity = 4;
    const billedItems = [cheese];
    // Act
    render(<Bill billItems={billedItems} onClear={onClear}/>);
    const calculateBillButton = screen.getByText('Calculate my bill');
    fireEvent.click(calculateBillButton);
    // Assert
    expect(screen.getByText('BOGOF on cheese')).toBeInTheDocument();
    expect(screen.getByText('Total Before savings: £3.60')).toBeInTheDocument();
    expect(screen.getByText('Total After savings: £1.80')).toBeInTheDocument();
  });
  
  // Butter alone should have a saving of a third
  test('a third off butter when one butter added to bill', () => {
    // Arrange
    const billedItems = [butter];
    // Act
    render(<Bill billItems={billedItems} onClear={onClear}/>);
    const calculateBillButton = screen.getByText('Calculate my bill');
    fireEvent.click(calculateBillButton);
    // Assert
    expect(screen.getByText('1/3 off butter')).toBeInTheDocument();
    expect(screen.getByText('Total Before savings: £1.20')).toBeInTheDocument();
    expect(screen.getByText('Total After savings: £0.80')).toBeInTheDocument();
  });


  // Butter and another item, butter should still have saving of a third
  test('a third off butter when one butter and another item added to bill', () => {
    // Arrange
    bread.quantity = 1;
    const billedItems = [butter, bread];
    // Act
    render(<Bill billItems={billedItems} onClear={onClear}/>);
    const calculateBillButton = screen.getByText('Calculate my bill');
    fireEvent.click(calculateBillButton);
    // Assert
    expect(screen.getByText('1/3 off butter')).toBeInTheDocument();
    expect(screen.getByText('Total Before savings: £2.30')).toBeInTheDocument();
    expect(screen.getByText('Total After savings: £1.90')).toBeInTheDocument();
  });
});