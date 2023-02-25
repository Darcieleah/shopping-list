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
  // to handle adding items to the bill
  // comes from use state, set default value oh bill items to an empty array
  // pass bill items to the bill component
  const [billItems, setBillItems] = useState<BilledItem[]>([]);

  const onAdd = (product: Item) => {
    // check if the product already exists on the bill - check if the product id exists in the bill array
    const billItem = billItems.find(x => x.id === product.id);
    if(billItem) {
      //increase the quantity of the bill item
      billItem.quantity ++;
    } else {
      // item does not exist on the bill yet, add it!
      // property spread notation - three dots mean iterating over each of the items in bill items array
      setBillItems([...billItems, {...product, quantity:1}])
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <Main onAdd={onAdd} products={products}></Main>
      <Bill billItems={billItems}></Bill>
    </div>
  );
}

export default App;
