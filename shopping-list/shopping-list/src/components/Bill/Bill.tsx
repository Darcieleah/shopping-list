import React from 'react';
import styles from './Bill.module.scss';
import BilledItem from '../../items/BilledItem';


type BillProps = {
  billItems: BilledItem[],
  //TODO: add on add functionality directing from bill
  // onAdd: (product: Product) => void; 
}

let totalSum = 0;

function Bill({billItems}: BillProps) {
  // add the prices together for the total sum
  {for (let i = 0; i < billItems.length; i++) {
  const billItem = billItems[i];
  totalSum += billItem.price;}}

  return (
  <aside className={styles.Bill} data-testid="Bill">
    <h2>Your Bill</h2>
    <div>{billItems.length === 0 && <p>"No items"</p>}</div>
    {billItems.map((item) => (
    <div className={styles.billRow} key={item.id}>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <p>{item.quantity}</p>
    </div>
    ))}
    <footer>
      <p>TOTAL:</p>
      <p>{totalSum}</p>
    </footer>
  </aside>
)};

export default Bill;
