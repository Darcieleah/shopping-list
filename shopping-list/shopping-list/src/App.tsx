import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bill from './components/Bill/Bill';
import productsData from './product-data';

function App() {
  const {products} = productsData
  return (
    <div className="App">
      <Header></Header>
      <Main products={products}></Main>
      <Bill></Bill>
    </div>
  );
}

export default App;
