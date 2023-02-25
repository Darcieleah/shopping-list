import React, { FC } from 'react';
import styles from './Main.module.scss';
import Product from '../Product/Product';
import Item from '../../items/Item';

interface MainProps {
  products: Item[];
  onAdd: (product: Item) => void; 
}

function Main(props: MainProps) {
  return (
  <main className={styles.Main} data-testid="Main">
    {props.products.map(product => (<Product key={product.id} product={product} onAdd={props.onAdd}></Product>))}
  </main>
  )
};

export default Main;
