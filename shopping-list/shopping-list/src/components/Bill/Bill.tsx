import React, { FC } from 'react';
import styles from './Bill.module.scss';
import Product from '../../items/Item';

type BillProps = {
  billItems: {id: number}[],
  // onAdd: (product: Product) => void; 
}

function Bill({billItems}: BillProps) {
  return (
  <aside className={styles.Bill} data-testid="Bill">
     <h2>Your Bill</h2>
     <div>{billItems.length === 0 && <div>"no items on the bill"</div>}</div>
  </aside>
)};

export default Bill;
