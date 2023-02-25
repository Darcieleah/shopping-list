import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bill from './components/Bill/Bill';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Bill></Bill>
    </div>
  );
}

export default App;
