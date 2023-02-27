import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bill from './components/Bill/Bill';
import productsData from './product-data';
import Item from './items/Item';
import BilledItem from './items/BilledItem';

function App() {
  const {products} = productsData;
  const [billItems, setBillItems] = useState<BilledItem[]>([]);

  const onAdd = (product: Item) => {
    // check if the product already exists on the bill
    const billItem = billItems.find(x => x.id === product.id);
    if(billItem) {
      // item exists, increase the quantity by 1
      setBillItems(billItems.map(x => x.id === product.id ? {...billItem, quantity: billItem.quantity +1} : x));
    } else {
      // item does not exist on the bill yet, add it!
      setBillItems([...billItems, {...product, quantity:1}])
    }
  };

  //TODO: add remove method which could be used to remove singular items

  const onClear = () => {
    setBillItems([]);
  }

  return (
    <div className="App" data-testid="App">
      <Header></Header>
      <Main onAdd={onAdd} products={products}></Main>
      <Bill onClear={onClear} billItems={billItems}></Bill>
    </div>
  );
}

export default App;
