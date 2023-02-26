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
      // find item that matches product id, and on that item only set the object to the bill item but change the quantity to plus one
      // if nothing matches the condition, keep the same
      setBillItems(billItems.map(x => x.id === product.id ? {...billItem, quantity: billItem.quantity +1} : x));
    } else {
      // item does not exist on the bill yet, add it!
      // property spread notation - three dots mean iterating over each of the items in bill items array
      setBillItems([...billItems, {...product, quantity:1}])
    }
  };

  // const onRemove = (product:Item) => {
  //   const billItem = billItems.find(x => x.id === product.id);
  //   if(billItem) {
  //     if(billItem.quantity > 1) {
  //       billItem.quantity = billItem.quantity -1;
  //     } else {
  //       // remove item from bill items array
  //       // this sets the bill items array to a list of all objects that don't match the product it
  //       // effectively removing bill item from the array
  //       setBillItems(billItems.filter(x => x.id !== product.id));
  //     }
  //   }
  // };

  const onClear = () => {
    // remove all bill items
    setBillItems([]);
  }

  return (
    <div className="App">
      <Header></Header>
      <Main onAdd={onAdd} products={products}></Main>
      <Bill onClear={onClear} billItems={billItems}></Bill>
    </div>
  );
}

export default App;
